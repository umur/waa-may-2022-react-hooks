import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const url = "http://localhost:8080/api/v1/sign-in";
  
  const onSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please add username and password");
      return;
    }

    loginUser({ username, password });

    setUsername("");
    setPassword("");
  };

  const loginUser = async (user) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("Sign in response : ", data);
      });
  };


  return (
    <div className="main-container">
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input type="submit" value="Sign In" className="btn btn-block" />
      </form>
      <div className="center">   
        <Link to='/'>Go Back</Link>
      </div>
    </div>
  );
};

export default SignIn;
