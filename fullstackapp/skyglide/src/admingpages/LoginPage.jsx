import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
// import toast, { Toaster } from 'react-hot-toast';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function LoginPage() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/login', { username, password })
      .then(response => {
        console.log(response.data)
        alert("login successful")
      })
      .catch(error => {
        setErrorMessage(error.response.data.message);
      });
     
  };

  return (
    <MDBContainer fluid style={{width:'800px',marginTop:'130px'}}>
    <MDBCard
      className="text-black m-5"
      style={{ borderRadius: "25px",height:'350px' }}>
      <MDBCardBody>
        <MDBRow>
          <MDBCol
            md="10"
            lg="6"
            className="order-2 order-lg-1 d-flex flex-column align-items-center">
            <p className="text-center h3 fw-bold mx-1 mx-md-4 mt-4">
              Login
            </p>

            <form className="flightpost_form" onSubmit={handleSubmit}>
                <ToastContainer/>
              <div class="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />


                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  class="form-control"
                  id="inputusername"
                  placeholder="Enter username"
                  required
                />
              </div>
              <div class="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  class="form-control"
                  id="inputpassword"
                  placeholder="Enter password"
                  required
                />
              </div>
              {errorMessage && <div>{errorMessage}</div>}
              <button
                type="submit"
                class="btn btn-primary"
              
                style={{ marginLeft: "40px" }}>
                Login
              </button>
          
            </form>
               {/* <form onSubmit={handleSubmit}>
<div>
<label htmlFor="username">Username:</label>
<input type="text" id="username" value={username} onChange={event => setUserName(event.target.value)} />
</div>
<div>
<label htmlFor="password">Password:</label>
<input type="password" id="password" value={password} onChange={event => setPassword(event.target.value)} />
</div>
{errorMessage && <div>{errorMessage}</div>}
<button type="submit">Login</button>
</form> */}
          </MDBCol>

          <MDBCol
            md="10"
            lg="6"
            className="order-1 order-lg-2 d-flex align-items-center">
            <MDBCardImage
              src="https://uigstudio.com/media/1554/download/Shipping%202.png?v=1"
              fluid
            />
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>
  );
}

export default LoginPage;