import React from "react";
import "./Signup.css";
import HeadingComp from "./HeadingComp";

const SignIn = () => {
  return (
    <div>
      <div className="signup">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center">
              <HeadingComp first="Sign" second="In" />
            </div>
            <div className="col-lg-8 column d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column w-100 p-5">
                <input
                  className="p-2 my-3 input-signup"
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                />
                <input
                  className="p-2 my-3 input-signup"
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                />
                <button className="btn-signup p-2">Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
