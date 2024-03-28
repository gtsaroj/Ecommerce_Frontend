import React from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { authLogout } from "../../redux/AuthReducer";

const AuthProfile = ({ user }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    Cookies.remove("accessToken");
    dispatch(authLogout());
  };
  return (
    <div className=" px-1 py-4 flex bg-[var(--light-text)] flex-col w-[300px]  rounded-md items-baseline justify-center gap-5">
      <div className="flex flex-col items-baseline justify-center gap-1 w-full">
        <p className="text-[12px] text-[var(--dark-text)]">Currently in</p>
        <div className="flex items-center justify-start gap-3 w-full hover:bg-[#8080807c] p-1 rounded-md">
          <div>
            <img src={user?.avatar} className="w-20 h-16 rounded-full" alt="" />
          </div>
          <div className="flex flex-col items-baseline justify-center gap-1 w-full">
            <p className="text-[var(--dark-text)] text-[15px] font-semibold">
              {user?.username}
            </p>
            <p className="text-sm ">Personal</p>
            <p className="text-sm">{user?.email}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex-col space-y-2 items-start justify-center">
        <p className="text-[12px] text-[var(--dark-text)]">More options</p>
        <div className="flex flex-col items-baseline justify-start gap-1 w-full">
          <button className=" flex justify-start items-center  rounded-sm text-[var(--dark-text)] hover:bg-[#8080807c] w-full text-[15px] py-1 px-4 bg-[var(--secondary-light-text)]">
            View Orders
          </button>
          <button
            onClick={() => handleLogout()}
            className=" flex justify-start items-center  rounded-sm text-[var(--dark-text)] hover:bg-[#8080807c] w-full text-[15px] py-1 px-4 bg-[var(--secondary-light-text)]"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthProfile;
