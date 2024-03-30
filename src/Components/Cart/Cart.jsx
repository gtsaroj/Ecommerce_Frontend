import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { ShoppingBagIcon } from "lucide-react";

const Cart = () => {
  // =====================================USE DISPATCH===============================================================
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const reset = () => {
    dispatch(resetCart());
  };

  const totalPrice = () => {
    let total = 0;
    products?.forEach((item) => (total += item.quantity * item.newPrice));
    return total.toFixed(2);
  };

  // =====================Payment Integretion==================================================
  const stripePromise = loadStripe(
    "pk_test_51NdSj3A79zEhuiBCuCWhzMKm5DZU5xdyg6uTqzASq2NM2ylpJdwv1GH370r725CPMKkfFGYWvFdCAS2Pqjz3dsuS007RZ0Sdxr"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await axios.post(
        process.env.REACT_APP_API_URL + "/order",
        { products },
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      );
      // const res = await requestInstance.post('/api/order', {
      //     products,
      // });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const products = useSelector((state) => state.root.cart.products);
  return (
    <div className="cart sm:w-[400px] w-[300px] ">
      <h1 className="text-sm">Products in Your Cart</h1>

      {products?.length <= 0 ? (
        <div className="flex flex-col gap-3 items-center justify-center">
          <ShoppingBagIcon className="size-9" />
          <h1 className="text-sm">Products in Your Cart</h1>
        </div>
      ) : (
        products?.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.Img} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc.substring(0, 100)}</p>
              <div className="price">
                {" "}
                {item.quantity} ×{item.newPrice}
              </div>
            </div>
            <DeleteOutlinedIcon
              className="delete"
              onClick={() => handleRemoveItem(item.id)}
            />
          </div>
        ))
      )}

      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button className="rounded-sm" onClick={handlePayment}>
        PROCEED TO CHECKOUT
      </button>
      <span
        className="reset text-sm bg-[var(--primary-color)] text-white py-1 px-3 rounded-md"
        onClick={reset}
      >
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
