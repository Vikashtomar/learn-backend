/** @format */

import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    axios
      .post("http://localhost:8080/sendData", { name, password })
      .then((res) => {
        console.log(res);
      });
  }
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Register;
