import Header from "./Header";
import background from "../utils/background.jpg";
import { useState, useRef } from "react";
import { validateLoginForm } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    console.log(email)
    console.log(password)
    const message = validateLoginForm(email.current.value,password.current.value)
    console.log(message)
    setErrMessage(message)
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={background} alt="Background" />
      </div>
      <div className="flex items-center justify-center h-full relative z-10">
        <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 p-12 bg-black bg-opacity-60 rounded-lg shadow-lg mt-40">
          <h1
            
            className="font-bold text-white text-3xl py-4"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
             
              type="text"
              placeholder="Full Name"
              className="p-2 my-4 text-white w-full bg-gray-900 rounded"
            />
          )}
          <input
            ref = {email}
            type="text"
            placeholder="Email Address"
            className="p-2 my-4 w-full text-white bg-gray-900 rounded"
          />
          <input
            ref = {password}
            type="password"
            placeholder="Password"
            className="p-2 my-4 w-full text-white bg-gray-900 rounded"
          />
          <p className="text-red-600 font-bold">{errMessage}</p>
          <button onClick={handleButtonClick} className="p-3 my-4 w-full bg-red-600 text-white rounded">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            onClick={toggleSignIn}
            className="text-white cursor-pointer hover:text-blue-500"
          >
            {isSignIn
              ? "New to Stream-gpt? Sign up Now!"
              : "Already registered? Sign in Now!"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
