import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');

  const handleSignup = async (e) => {
    try {
      const result = await axios.post("http://localhost:8080/api/v1/uaa/signup", { email, password, firstName, lastname });
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');
      alert('successfully registered');

    } catch (error) {
      console.log(error);
    }


  }

  return (
    <div className="container w-25">
      <div>
        <h3>
          Signup
        </h3>
      </div>
      <form className="">
        <div className="">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" value={email} className="form-control" id="inputEmail4" autoComplete='off' onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text"  value={firstName} className="form-control" id="firstName" onChange={e => setFirstName(e.target.value)} />
        </div>
        <div className="">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" value={lastname} className="form-control" id="lastName" onChange={e => setLastName(e.target.value)} />
        </div>
        <div className="">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input type="password" value={password} className="form-control" id="inputPassword4" onChange={e => setPassword(e.target.value)} />
        </div>
        <div>
          <input
            type="button"
            value="Signup"
            className="form-control mt-3 btn-success"
            onClick={handleSignup}
          />
        </div>
      </form>
    </div>
  )
}

export default Signup