import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function LoginPage(props) {

  const navigate = useNavigate();

  let [email,setEmail] = useState('');
  let [password,setPassword] = useState('');
  var pass;
  var id;
  var values;

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    await fetch(`http://localhost:3000/api/users/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data._id);
        pass = data.password;
        id = data._id;
        handleChange();
      });
  }

  function handleChange() {
    console.log(pass);
    if(password == pass){
      console.log(id);
      props.setHome(true);
      navigate("/");
    }
    else{
      alert("Invalid Credentials !!")
    }
  }

  return (
    <div className='container my-3'  style={{width: '70%', display: props.home===true?'none':'block'}}>
      <section className="page-section" id="login">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0" style={{fontFamily: '-moz-initial', fontWeight: 'bold', fontSize: '35px', letterSpacing: '2px'}}><u>Login</u></h2>
              <hr className="divider my-4"/>
            </div>
          </div>
          <div className="row justify-content-center">
            <form>
              <div className="form-group">
                <label htmlFor="inputEmail1">Email address<span style={{color: 'red'}}>*</span></label>
                <input type="email" className="form-control my-1" name="email" id="inputEmail1" aria-describedby="emailHelp" onChange={(e) => {setEmail(e.target.value)}} required/>
                <small id="emailHelp" className="form-text text-muted" style={{color: 'white'}}>We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group my-4">
                <label htmlFor="inputPassword1">Password</label>
                <input type="password" className="form-control my-1" name="password" id="inputPassword1" onChange={(e) => {setPassword(e.target.value)}} required/>
              </div>
              <div className='text-center'>
                <button type="submit" className="btn btn-outline-light my-2" onClick={handleLogin}>Login</button>
              </div>
              <hr className="divider my-4"/>
              <div className="text-center">
              New to Catalogue?<Link className="medium mx-2" to="/register" style={{cursor: 'pointer', color: 'aqua'}}>Register</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LoginPage
