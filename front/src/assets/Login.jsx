/** @format */

import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8080/login", { name, password })
      .then((result) => {
        console.log(result);
      });
  }
  return (
    <>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter your name "
          onChange={(e) => setName(e.target.value)}
        />

<input
          type="password"
          value={password}
          placeholder="Enter your name"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Enter</button>
      </form>
    </>
  );
}

export default Login;
