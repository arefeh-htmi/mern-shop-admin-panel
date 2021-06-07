/**
 *
 * SignupProvider
 *
 */

import React from "react";
import { BASE_API_URL } from "../constants/keys.js";
const SignupProvider = () => {
  return (
    <div className="signup-provider">
      <a href={`${BASE_API_URL}/api/users/google`} className="mb-2 google-btn">
        {/* <GoogleIcon /> */}
        <span className="btn-text">Login with Google</span>
      </a>

      <a href={`${BASE_API_URL}/auth/facebook`} className="facebook-btn">
        {/* <FacebookIcon /> */}
        <span className="btn-text">Login with Facebook</span>
      </a>
    </div>
  );
};

export default SignupProvider;
