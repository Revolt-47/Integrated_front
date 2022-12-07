import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup(){

  async function postData(url = '', data) {
  

      // Default options are marked with *
  axios({
    method: 'post',
    
    url: 'http://24.199.70.180:3001/createcustomer',
    data: {
      name : name,
      email : email,
       password : password,
       phone : phone,
    }
    });

    

    axios.get('http://24.199.70.180:3001/createcustomer').then((response) => {
      // setbackend(response.data);
       console.log(response.data);
       seterror(response.data);
      // console.log(typeof(response.data));
      })
       
  }
  
  

    
    let [name,setname] = useState("")
    let [password,setpassword] = useState("")
    let [email,setemail] = useState("")
    let [phone,setphone] = useState("")
    let [error,seterror] = useState(false)

    const handleemail = (e) =>{
        setemail(e.target.value);
        console.log(email);
    }

    const handlepass = (e) =>{
        setpassword(e.target.value);
        console.log(password)
    }

    const handlename = (e) =>{
        setname(e.target.value);
        console.log(name)
    }

    const handlephone = (e) =>{
        setphone(e.target.value);
        console.log(phone);
    }

    const navigate = useNavigate();

    

    const changeAuthMode = () => {
      navigate('/')
    }

    const submitform = () => {
      if(name !== "" && email !== "" && password !=="" && phone!=="" && error == false)
      {
        changeAuthMode();
        postData('24.199.71.58:3001/createcustomer','Daniyal');
      }
    }

    const errorMessage = () => {
      return (
        <div
          className="error"
          style={{
            display: error ? '' : 'none',
          }}>
          <alert>Email Already taken</alert>
        </div>
      );
    };
    
  

    return(
        <div className="Auth-form-container">
          <div className="error">
          {errorMessage()}
          </div>
        <form className="Auth-form " data-testid = "tid5">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>
            <div className="form-group mt-3" data-testid = "tid6">
              <label>Full Name</label>
              <input
                type="text" required
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
                value = {name}
                onChange={handlename}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email" required
                className="form-control mt-1"
                placeholder="Email Address"
                onChange={handleemail}
              />
            </div>
            <div className="form-group mt-3" data-testid = "tid7">
              <label>Phone Number</label>
              <input
                type="text" required
                className="form-control mt-1"
                placeholder="+92----"
                onChange={handlephone}
              />
            </div>
            <div className="form-group mt-3" data-testid = "tid8">
              <label>Password</label>
              <input
                type="password" required
                className="form-control mt-1"
                placeholder="Password"
                onChange={handlepass}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={submitform}>
                Submit
              </button>
            </div>
             
          </div>
        </form>
      </div>
    )
}