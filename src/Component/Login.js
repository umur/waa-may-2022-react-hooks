import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginRequest = {
      userName: e.target.userName.value,
      password: e.target.password.value
    }

    await axios.post('http://localhost:8080/api/v1/uaa/login', loginRequest)
      .then(response => {
        console.log('token', response.data);
        localStorage.setItem('token', response.data);
        navigate('/products');
      })

  }

  return (

    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <div>
        <input type="text"
          id="userName"
          name="userName"
          placeholder="login"
        />
        <input type="password"
          id="password"
          name="password"
          placeholder="password"
        />
        <input type="submit" value="login"></input>
      </div>

    </form>

  );


};

export default Login;