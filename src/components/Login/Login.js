import React, { useRef, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, passError] =
    useSendPasswordResetEmail(auth);
  // const [emailAddress, setEmailAddress] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/home";

  const resetPass = async (e) => {
    // console.log(emailAddress, "e");
    const email = emailRef.current.value;
    console.log(email);
    await sendPasswordResetEmail(email);
    if (sending) {
      toast.success("email Sent");
    }
  };

  console.log(sending);

  // sign-in with email
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passwordRef.current.value;
    signInWithEmailAndPassword(email, pass);
  };

  if (user || googleUser) {
    navigate(from, { replace: true });
  }
  if (loading || googleLoading) {
    <Loading></Loading>;
  }
  return (
    <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
      <div className="relative sm:max-w-sm w-full">
        <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
        <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
        <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
          <label className="block mt-2 text-2xl text-gray-700 text-center font-semibold">
            Login
          </label>
          <form onSubmit={handleLogin} className="mt-5">
            <div className="mt-7">
              <input
                ref={emailRef}
                type="email"
                placeholder="Email"
                name="email"
                required
                className="pl-3 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>

            <div className="mt-7">
              <input
                ref={passwordRef}
                type="password"
                placeholder="Password"
                name="pass"
                required
                className="pl-3 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>
            <div className="mt-7">
              {error && <p className="text-red-500 mb-4">{error.message}</p>}
              <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                Login
              </button>
            </div>
          </form>
          <p>
            Forget password?{" "}
            <button onClick={resetPass} className="text-blue-600">
              Reset
            </button>
          </p>
          <div className="flex mt-7 items-center text-center">
            <hr className="border-gray-300 border-1 w-full rounded-md" />
            <label className="block font-medium text-sm text-gray-600 w-full">
              or
            </label>
            <hr className="border-gray-300 border-1 w-full rounded-md" />
          </div>

          {googleError && (
            <p className="text-red-500 mt-3">{googleError.message}</p>
          )}
          <div className="flex mt-7 justify-center w-full">
            <button
              onClick={() => signInWithGoogle()}
              className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
            >
              Google
            </button>
          </div>

          <div className="mt-7">
            <div className="flex justify-center items-center">
              <label className="mr-2">New to Pro Trainer?</label>
              <Link
                to="/signup"
                className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
              >
                <p className="text-base">Create new account.</p>
              </Link>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
