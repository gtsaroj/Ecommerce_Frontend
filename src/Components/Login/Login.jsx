import React, { FormEvent, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Logo from "../photos/flag.png";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../redux/LoginAction";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import ReactLoading from "react-loading";

const LoginContainer = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [dataSend, setDataSend] = useState(false);
  const dispatch = useDispatch();

  const showPassword = () => {
    setShow((show) => !show);
    setPasswordType(passwordType === "text" ? "password" : "text");
  };

  const LoginFormSubmit = async (event) => {
    event.preventDefault();
    try {
      setDataSend(true);
      await dispatch(LoginUser({ email, password }));
      toast.success("Welcome")
    } catch (error) {
      console.error(`Error occuring while sending form : ${error}`);
    }
    setDataSend(false);
  };

  return (
    <div className="flex items-center justify-center w-full h-full px-3 py-8">
      <div className="w-full h-full bg-[var(--light-foreground)] flex flex-col gap-8 rounded-lg shadow-sm">
        <div className="w-full flex flex-col items-center gap-3 px-3 py-6  text-[30px] font-bold text-[var(--primary-color)] tracking-wide text-center">
          <h1 className="md:hidden">Login</h1>
          <h1 className="hidden md:block">Login with Email</h1>
        </div>
        <div className="px-3 py-4">
          <form className="flex flex-col gap-4 p-2" onSubmit={LoginFormSubmit}>
            <div className="relative flex flex-col gap-2">
              <label htmlFor="logEmail" className="text-[15px]">
                Email
              </label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-[var(--light-border)]  focus:bg-[var(--light-border)] border bg-transparent rounded-md h-[40px] outline-none px-5 py-3 text-md"
              />
            </div>
            <div className="relative flex flex-col gap-2">
              <label htmlFor="logPassword" className="text-[15px]">
                Password
              </label>
              <input
                type={passwordType}
                name="password"
                autoComplete="off"
                maxLength={25}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-[var(--light-border)]  focus:bg-[var(--light-border)] border bg-transparent rounded-md h-[40px] outline-none px-5 py-3 text-md"
              />

              {show ? (
                <div
                  className="text-[var(--dark-secondary-text)] absolute top-[37px] right-[10px] cursor-pointer"
                  onClick={showPassword}
                >
                  <Eye size={23} />
                </div>
              ) : (
                <div
                  className="text-[var(--dark-secondary-text)] absolute top-[37px] right-[10px] cursor-pointer"
                  onClick={showPassword}
                >
                  <EyeOff size={23} />
                </div>
              )}
            </div>

            <p
              onClick={() => navigate("/forgot-password")}
              className="text-[var(--dark-secondary-text)] text-sm cursor-pointer hover:underline select-none"
            >
              Forgot Password?
            </p>
            <button className="h-[40px] flex items-center justify-center rounded-md bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-[var(--light-text)] text-xl font-bold tracking-wide transition-colors duration-500 ease-in-out mt-5 ">
              {dataSend ? (
                <div className="flex justify-center items-center">
                  {" "}
                  Sending <ReactLoading className="" type="bubbles" />
                </div>
              ) : (
                "Submit"
              )}
            </button>
            <p
              className="text-[var(--dark-secondary-text)] text-sm cursor-pointer hover:underline text-center mt-2 select-none"
              onClick={() => navigate("/register")}
            >
              Don't have an account?{" "}
              <span className="hover:text-[var(--primary-color)]">
                Register Here.
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <div className=" min-w-[100vw] w-full  h-full bg-[var(--light-background)] overflow-x-hidden">
      {/* Mobile */}
      <div className="flex flex-col items-center w-full h-full lg:hidden min-h-[90vh] gap-8">
        <div className="flex items-center justify-center w-full sm:w-[600px] h-full">
          <LoginContainer />
        </div>
      </div>
      {/* Tablet and Desktop */}
      <div className="items-center justify-around hidden min-h-[90vh] w-full gap-5 px-3 py-4 overflow-x-hidden lg:flex">
        <div className="flex items-center justify-center">
          <img src={Logo} className="w-full max-w-[800px]  " alt="logo" />
        </div>
        <div className=" max-w-[700px] w-full pr-8">
          <LoginContainer />
        </div>
      </div>

      <Toaster position="top-center" />
    </div>
  );
};

export default Login;
