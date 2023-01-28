import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Alert from '../common/Alert';

const Login = ({ login }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [formErrors, setFormErrors] = useState([]);

  /** Handle form submit:
   *
   * Calls login func prop and, if successful, redirect to /companies.
   */
  async function handleSubmit(e){
    e.preventDefault();

    let result = await login(formData);
    console.log(result)
    if (result.success){
      navigate("/");
    } else {
      setFormErrors(result.errors);
    }
  }

  // Update form data field
  function handleChange(e){
    const { name, value } = e.target;
    setFormData(l => ({...l, [name]: value }));
  }
  console.log(formData)
  

  return (
    <div className="auth">
        <h1>Login</h1>
        <form>
            <input type="text" placeholder="username" name="username" required onChange={handleChange} />
            <input type="password" placeholder="password" name="password" required onChange={handleChange} />
            <button onClick={handleSubmit}>Login</button>

            {formErrors.length
              ? <Alert type="danger" messages={formErrors} />
              : null}
            <span>Don't have an account? <Link to="/register">Sign Up</Link></span>
        </form>
    </div>
  )
}

export default Login