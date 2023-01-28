import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import BlogStoneApi from '../api/api'
import signup from "../App.js"
import Alert from '../common/Alert'


const Register = ({signup}) => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState([]);

  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })

  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  console.log(inputs);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try{
  //   const res = await axios.post("http://localhost:3001/auth/register", inputs)
  //   console.log(res)
  //   } catch (err){
  //     console.log(err)
  //   }
  // }

  async function handleSubmit(e) {
    e.preventDefault();
    
    let result = await signup(inputs);
    console.log(result)
    if(result.success){
    navigate("/");
    } else {
      setFormErrors(result.errors);
    }
  }
  

  return (
    <div className="auth">
        <h1>Register</h1>
        <form>
            <input required type="text" placeholder="username" name="username" onChange={handleChange} />
            <input required type="email" placeholder="email" name="email" onChange={handleChange} />
            <input required type="password" placeholder="password" name="password" onChange={handleChange} />
            <button onClick={handleSubmit}>Register</button>
            
            {formErrors.length
              ? <Alert type="danger" messages={formErrors} />
              : null}
            <span>Already have an account? <Link to="/login">Log In</Link></span>
        </form>
    </div>
  )
}

export default Register