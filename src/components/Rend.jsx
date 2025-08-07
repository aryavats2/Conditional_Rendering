import React from "react";
import Login from "./Login";

var isLoggedin = Math.random() > 0.5 ? "true" : "false";
function Renderr() {
  if (isLoggedin === "true") {
    return <h1>Welcome To kiitGPT</h1>;
  } else {
    return <Login message="Welcome to the fastest  AI chatbot of Odisha" />;
  }
}

export default Renderr;
