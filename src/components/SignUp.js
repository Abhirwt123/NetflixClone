import { useRef, useState } from "react";
import { ValidateForm } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate=useNavigate()
  const [isUserSignIn, setIsUserSignIn] = useState(true);
  // setting the error message
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef("");
  const password = useRef("");
  const name = useRef("");
  // validation function
  const handelButtonClick = () => {
    const message = ValidateForm(
      name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    // user auth.... using fire base
    if (!isUserSignIn) {
      //signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage);
          // ..
        });
    } else {
      //signIn
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
          navigate("/browser")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage);
          navigate("/")
        });
    }
  };
  const toggleSignIn = () => {
    setIsUserSignIn(!isUserSignIn);
  };
  return (
    <div className=" bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
      <div className="gradient ">
        <div className="wrapper mb-16">
          <Header/>
          <div className="form-wrap pt-28">
          <form
            className="w-5/12 m-auto flex justify-center bg-black bg-opacity-60 rounded-md "
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="form-wrap w-8/12 py-12">
              <div className="title text-4xl text-white font-bold mb-6 text-center">
                {!isUserSignIn ? "Sign Up" : "Sign In"}
              </div>
              <div className="input-wrap">
                <div className="name mb-8 ">
                  {!isUserSignIn && (
                    <input
                      ref={name}
                      type="name"
                      className=" w-full px-3 py-4 text-white bg-slate-900 placeholder:text-white rounded-md"
                      placeholder="Full Name"
                    />
                  )}
                </div>
                <div className="email mb-8">
                  <input
                    ref={email}
                    type="text"
                    className="w-full  px-3 py-4 text-white bg-slate-900 placeholder:text-white rounded-md"
                    placeholder="Email Address"
                  />
                </div>
                <div className="password mb-16">
                  <input
                    ref={password}
                    type="password"
                    className=" w-full px-3 py-4 text-white bg-slate-900 placeholder:text-white rounded-md"
                    placeholder="Password"
                  />
                  <p className="err font-bold text-red-600 text-lg">
                    {errorMessage}
                  </p>
                </div>
                <div className="btn-wrap">
                  <button
                    className="bg-red-700 text-white px-3 py-4 rounded-md w-full font-bold"
                    onClick={handelButtonClick}
                  >
                    {!isUserSignIn ? "Sign Up" : "Sign In"}
                  </button>

                  <div
                    className="regesteredUser text-white py-4 cursor-pointer "
                    onClick={toggleSignIn}
                  >
                    {!isUserSignIn
                      ? " Sign Up for injoying your favourite Movie Series here"
                      : "Sign Up"}
                  </div>
                </div>
              </div>
            </div>
          </form>
          </div>
        </div>
        <div className="footer bg-black bg-opacity-60">
          <div className="wrap w-8/12 m-auto py-8 text-gray-500">
            <div className="number">
              <p>Questions? Call 000-800-919-1694</p>
            </div>
            <div className="links mt-10">
              <ul className="flex gap-36">
                <li>FAQ</li>
                <li>Help Center</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
              </ul>
              <ul className="flex gap-8 mt-4">
                <li>Cookie Preferences</li>
                <li>Corporate Information</li>
              </ul>
            </div>
            <select
              name="lang"
              id="language"
              className=" mr-6 px-4 py-1 bg-transparent text-white border border-white rounded-md font-bold mt-4"
            >
              <option className="bg-black" value="hindi">
                Hindi
              </option>
              <option className="bg-black" value="english">
                English
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
