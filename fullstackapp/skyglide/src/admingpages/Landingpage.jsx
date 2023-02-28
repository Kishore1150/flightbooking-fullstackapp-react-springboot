import logo1 from "../assets/images/airplane8.gif";
import "bootstrap/dist/css/bootstrap.min.css";

import { useTranslation } from "react-i18next";
import { Modal, Button } from "react-bootstrap";
import logo2 from "../assets/images/india.png";
import "../Styles/Landingpage.css";
import image4 from "../assets/images/flight1.png";
import video1 from "../assets/images/flight1.mp4";
import React, { useEffect, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

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
import { Link } from "react-router-dom";
import { init } from "i18next";
import axios from "axios";
const languages = [
  { value: "en", text: "Options" },
  { value: "en", text: "English" },
  { value: "hi", text: "Hindi" },
  { value: "te", text: "Telugu" },
  { value: "ml", text: "Malayalam" },
  { value: "ta", text: "Tamil" },
];

const Landingpage = () => {
  const [Users, setUsers] = useState([]);

  const [isShow1, invokeModal1] = React.useState(false);
  const [isShow, invokeModal] = React.useState(false);
  const [isShow2, invokeModal2] = React.useState(false);

  const initModal = () => {
    return invokeModal(!false);
  };

  const initModal1 = () => {
    return invokeModal(false);
  };
  const initModal2 = () => {
    return invokeModal1(!false);
  };
  const initModal3 = () => {
    return invokeModal1(false);
  };

  const initModal4 = () => {
    return invokeModal2(!false);
  };

  const initModel5 = () => {
    return invokeModal2(false);
  };

  const { t } = useTranslation();

  const [lang, setLang] = useState("en");

  // This function put query that helps to
  // change the language
  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = "http://localhost:3000/";
    window.location.replace(loc + "?lng=" + e.target.value);
  };


  useEffect(() => {
    fetch("http://localhost:8080/getusers")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  }, []);

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const [errorMessage, setErrorMessage] = useState('');

  React.useEffect(() => {
    if (localStorage.getItem("auth")) navigate("/Home");
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/login", { username, password })
      .then((res) => {
        console.log(res.data);
        if (res.data === "Login successful") {
          if (username == "Kishore" && password == "9228") {
            toast.success(res.data);
            setUserName("");
            setPassword("");
            alert("welcome admin " + username);

            localStorage.setItem("auth", true);
            navigate("/Home");
          } else {
            alert("welcome user "+username);
            // navigate("/Login")
          }
        } else if (res.data === "Login Failed") {
          toast.error(res.data);
        }
      });
  };
  const handleClicks = (event) => {
    event.preventDefault();
    // handle form submission
    axios
      .post(`http://localhost:8080/saveusers`, {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data === "Username and Email already exist")
          toast.error(res.data);
        else if (res.data === "Email already exists") toast.error(res.data);
        else if (res.data === "Username already exists") toast.error(res.data);
        else toast.success(res.data);
      });
  };

  return (
    <>
      <div>
        <nav class="navbar navbar-light bg-light">
          <div class="container">
            <Link style={{position:'relative',top:'5px'}} class="navbar-brand" to="/">
              <img src={logo1} alt="logo" width="30" height="24" />{" "}
              <b>SKYGLIDE</b>
            </Link>
            <div className="App">
              <Button
                variant="white"
                onClick={initModal}
                className="navbar-button-1">
                {t("Lang")}{" "}
                <img src={logo2} alt="logo2" width="18" height="10" />
                {t("country")}
              </Button>
              &nbsp;
              <Button
                variant="white"
                onClick={initModal2}
                x
                className="navbar-button-2">
                {t("login")}
              </Button>
              &nbsp;
              <Button
                variant="white"
                onClick={initModal4}
                x
                className="navbar-button-2">
                {t("signup")}
              </Button>
              <Modal size="lg" show={isShow1}>
                <Modal.Header closeButton onClick={initModal3}>
                  {/* <Modal.Title>Login </Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                  <MDBContainer fluid>
                    <MDBCard
                      className="text-black m-5"
                      style={{ borderRadius: "25px" }}>
                      <MDBCardBody>
                        <MDBRow>
                          <MDBCol
                            md="10"
                            lg="6"
                            className="order-2 order-lg-1 d-flex flex-column align-items-center">
                            <p className="text-center h3 fw-bold mx-1 mx-md-4 mt-4">
                              Login
                            </p>

                            <form
                              className="flightpost_form"
                              onSubmit={handleSubmit}>
                              <Toaster
                                position="top-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="colored"
                              />

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
                              {/* {errorMessage && <div>{errorMessage}</div>} */}
                              <button
                                type="submit"
                                class="btn btn-primary"
                                style={{ marginLeft: "40px" }}>
                                Login
                              </button>
                            </form>
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
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="danger" onClick={initModal3}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              <Modal size="lg" show={isShow2}>
                <Modal.Header closeButton onClick={initModel5}>
                  {/* <Modal.Title>Login </Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                  <MDBContainer fluid>
                    <MDBCard
                      className="text-black m-5"
                      style={{ borderRadius: "25px" }}>
                      <MDBCardBody>
                        <MDBRow>
                          <MDBCol
                            md="10"
                            lg="6"
                            className="order-2 order-lg-1 d-flex flex-column align-items-center">
                            <p className="text-center h3 fw-bold mx-1 mx-md-4 mt-4">
                              Signup
                            </p>

                            <form
                              className="flightpost_form"
                              onSubmit={handleClicks}>
                              <Toaster
                                position="top-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                              />
                              <div class="d-flex flex-row align-items-center mb-4 ">
                                <MDBIcon fas icon="user me-3" size="lg" />

                                <input
                                  type="text"
                                  class="form-control"
                                  value={username}
                                  id="inputflightId"
                                  onChange={(e) => setUserName(e.target.value)}
                                  aria-describedby="emailHelp"
                                  placeholder="Enter Username"
                                  required
                                />
                              </div>
                              <div class="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="envelope me-3" size="lg" />

                                <input
                                  type="text"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  class="form-control"
                                  id="inputflightimage"
                                  placeholder="Enter email "
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
                                  id="inputflightnumber"
                                  placeholder="Enter password"
                                  required
                                />
                              </div>
                              <button
                                type="submit"
                                class="btn btn-primary"
                                style={{ marginLeft: "40px" }}>
                                Sign Up
                              </button>
                            </form>
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
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="danger" onClick={initModel5}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </nav>

        <Modal show={isShow}>
          <Modal.Header closeButton onClick={initModal1}>
            <Modal.Title>Select Language</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label style={{ fontSize: "15px" }}>{t("Choose")}: </label>
            <select
              value={lang}
              onChange={handleChange}
              style={{ width: "100px" }}>
              {languages.map((item) => {
                return (
                  <option key={item.value} value={item.value}>
                    {item.text}
                  </option>
                );
              })}
            </select>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={initModal1}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="landing_main_img">
          <img src={image4} width="450" height="450" alt="image4" />
      
        </div>
        <div className="landing_content">
          <p>{t("TAG")}</p>
        </div>
        <div>
          <button className="search_flight">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/viewflightdetails">
              {t("search")}
            </Link>
          </button>
        </div>
      </div>

    </>
  );
};

export default Landingpage;

