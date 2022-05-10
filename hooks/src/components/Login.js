import React, { useState } from 'react'
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async() => {
    const result = await axios.post("http://localhost:8080/api/v1/uaa/login", {email, password});
    console.log(result.data);
  }

  return (
    <div className="container w-25">
      <div>
        <h3>
          Login
        </h3>
      </div>
      <form className="">
        <div className="">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" value={email} className="form-control" id="inputEmail4" autoComplete='off' onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input type="password" value={password} className="form-control" id="inputPassword4" onChange={e => setPassword(e.target.value)} />
        </div>
        <div>
          <input
           type="button" 
           value="Login" 
           onClick={handleLogin}
           className="form-control mt-3 btn-success" />
        </div>
      </form>
    </div>
  )
}

export default Login