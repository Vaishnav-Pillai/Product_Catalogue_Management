import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

function RegisterPage() {

  const navigate = useNavigate();

  let [firstname,setFirstname] = useState('');
  let [lastname,setLastname] = useState('');
  let [uname,setUname] = useState('');
  let [email,setEmail] = useState('');
  let [password,setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const uploadUrl = "http://localhost:3000/api/users";
    console.log(firstname,lastname,uname,email,password);
    fetch(uploadUrl,{
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        uname,
        email,
        password
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "User Registered");
        NavigatetoLogin();
      });
  }

  function NavigatetoLogin(){
    navigate("/login");
  }


  return (
    <div className='container my-3'  style={{width: '70%'}}>
      <section className="page-section" id="register">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0" style={{fontFamily: '-moz-initial', fontWeight: 'bold', fontSize: '35px'}}>Create an Account!</h2>
                <hr className="divider my-4"/>
              </div>
            </div>
            <div className="row justify-content-center">
                <div className="row o-hidden border-0">
                  <div className="col-lg-12">
                    <div>
                      <form className="user my-2">
                        <div className="form-group row">
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <input type="text" className="form-control form-control-user" name="firstname" id="inputFirstName" placeholder="First Name" onChange={(e)=>{setFirstname(e.target.value)}} required/>
                          </div>
                          <div className="col-sm-6">
                            <input type="text" className="form-control form-control-user" name="lastname" id="inputLastName" placeholder="Last Name" onChange={(e)=>{setLastname(e.target.value)}} required/>
                          </div>
                        </div>
                        <div className="form-group my-3">
                          <input type="text" className="form-control form-control-user" name="uname" id="inputUserName" placeholder="UserName" onChange={(e)=>{setUname(e.target.value)}} required/>
                        </div>
                        <div className="form-group my-3">
                          <input type="email" className="form-control form-control-user" name="email" id="inputEmail" placeholder="Email Address" onChange={(e)=>{setEmail(e.target.value)}} required/>
                        </div>
                        <div className="form-group row my-3">
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <input type="password" className="form-control form-control-user" name="password" id="inputPassword" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} required/>
                          </div>
                          <div className="col-sm-6">
                            <input type="password" className="form-control form-control-user" name="repeatPassword" id="inputRepeatPassword" placeholder="Repeat Password" required/>
                          </div>
                        </div>
                        <div className='text-center my-3'>
                          <button className="btn btn-outline-light" type="submit" onClick={handleSubmit}>Register Account</button>
                        </div>
                        <hr/>
                        <div className='text-center my-3'>
                          <Link to="/" className="btn btn-google btn-user btn-block btn-success disabled">
                            <i className="fab fa-google fa-fw"></i> Register with Google
                          </Link>
                        </div>
                        <div className='text-center my-3'>
                          <Link to="/" className="btn btn-facebook btn-user btn-block btn-primary disabled">
                            <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                          </Link>
                        </div>
                      </form>
                     <hr className="divider my-4"/>
                      <div className="text-center">
                        Already have an account? <Link className="medium mx-2" to="/login" style={{color: 'aqua', cursor: 'pointer'}}>Login!</Link>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default RegisterPage
