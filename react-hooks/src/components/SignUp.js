import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");
  const url = "http://localhost:8080/api/v1/sign-up";
  
  const registeruser = async (user) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("Sign Up");
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!username || !password || !retypedPassword) {
      alert("Please add username and password");
      return;
    }

    if (password !== retypedPassword) {
      alert("Passwords do not match!");
      return;
    }

    registeruser({ username, password });
    setUsername("");
    setPassword("");
    setRetypedPassword("");
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
        <div className="form-control">
          <label>Re Type Password</label>
          <input
            type="password"
            placeholder="Password"
            value={retypedPassword}
            onChange={(e) => setRetypedPassword(e.target.value)}
          />
        </div>

        <input type="submit" value="Sign In" className="btn btn-block" />
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
};

export default SignUp;
