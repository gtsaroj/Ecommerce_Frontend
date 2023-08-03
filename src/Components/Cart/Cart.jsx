import React from 'react'
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutline";

const Cart = () => {


    const data = [
        {
            id: 0,
            Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gDc_La572fAb7iWxQX7K-dYqN1-GoJ4xTQ&usqp=CAU",
            Img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSur_kFJvbAU8z4ijzd9kT1xLwVWBIvUl86jg&usqp=CAU",
            isNew: true,
            oldPrice: 415,
            title: "Monkey Sticker",
            newPrice: 1000,
            desc: "loremsjkfjsakjfadsfkjsfisa;ljsfj",
        },


    ]
    return (
        <div className="cart">
            <h1>Products in Your Cart</h1>
            {data?.map((item) => (
                <div className="item" key={item.id}>
                    <img src={item.Img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc.substring(0, 100)}</p>
                        <div className="price"> 1 ×{item.newPrice}</div>
                    </div>
                    <DeleteOutlinedIcon className='delete' />

                </div>
            ))}

            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset">Reset Cart</span>
        </div>
    )
}

export default Cart
