import logo1 from "../assets/images/airplane8.gif";
import image3 from "../assets/images/login_image.png";
import "bootstrap/dist/css/bootstrap.min.css";
// import ClickAwayListener from "react-click-away-listener";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Modal, Button } from "react-bootstrap";
import logo2 from "../assets/images/india.png";
import "../Styles/Landingpage.css";
import image4 from "../assets/images/flight1.png";
import video1 from "../assets/images/flight1.mp4";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

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
const languages = [
  { value: "en", text: "Options" },
  { value: "en", text: "English" },
  { value: "hi", text: "Hindi" },
  { value: "te", text: "Telugu" },
  { value: "ml", text: "Malayalam" },
  { value: "ta", text: "Tamil" },
];

function Landingpage1() {
  const [isShow1, invokeModal1] = React.useState(false);
  const [isShow, invokeModal] = React.useState(false);
  const navigate = useNavigate();

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
  const { t } = useTranslation();

  const [lang, setLang] = useState("en");
  const [Admin, setAdmin] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getusers")
      .then((res) => res.json())
      .then((result) => {
        setAdmin(result);
      });
  }, []);
  //   const [popup, setPopup] = useState(false);

  // This function put query that helps to
  // change the language
  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = "http://localhost:3000/";
    window.location.replace(loc + "?lng=" + e.target.value);
  };

  const [logout, setLogout] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem("auth")) navigate("/");
  }, [logout]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };

  return (
    <>
      <div>
        <nav class="navbar navbar-light bg-light">
          <div class="container">
            <Link class="navbar-brand" to="/">
              <img src={logo1} alt="logo" width="30" height="24" />{" "}
              <b>SKYGLIDE</b>
            </Link>
            <div className="App">
              <Button
                variant="white"
                onClick={initModal}
                className="navbar-button-3">
                English (UK){" "}
                <img src={logo2} alt="logo2" width="18" height="10" /> India
              </Button>
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
                  <Button variant="dark" onClick={initModal1}>
                    Store
                  </Button>
                </Modal.Footer>
              </Modal>

              <Dropdown classname="drop-down-menu">
                <Dropdown.Toggle className="navbar-button-5">
                  {/* <img
                      class="card-img-top"
                      style={{ padding: "10px 20px", borderRadius: "100px" }}
                      src={"https://res.cloudinary.com/dalynypf0/image/upload/v1677517066/DSC_4957_1_srhpfv.jpg"}
                      height="50px"
                      alt=""
                    /> */}
                  <i style={{ color: "black" }} class="fa-regular fa-user"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item   onClick={logoutHandler}>
                    {" "}
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/">
                      {" "}
                      Logout
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      to="/admindetails"
                      style={{ textDecoration: "none", color: "black" }}>
                      Profile
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Modal size="lg" show={isShow1}>
                <Modal.Header closeButton onClick={initModal3}>
                  <Modal.Title>Signup Users</Modal.Title>
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
                            <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                              Sign up
                            </p>

                            <div className="d-flex flex-row align-items-center mb-4 ">
                              <MDBIcon fas icon="user me-3" size="lg" />
                              <MDBInput
                                label="Your Name"
                                id="form1"
                                type="text"
                                className="w-100"
                              />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <MDBIcon fas icon="envelope me-3" size="lg" />
                              <MDBInput
                                label="Your Email"
                                id="form2"
                                type="email"
                              />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <MDBIcon fas icon="lock me-3" size="lg" />
                              <MDBInput
                                label="Password"
                                id="form3"
                                type="password"
                              />
                            </div>

                            <MDBBtn className="mb-4" size="lg">
                              Signup
                            </MDBBtn>
                          </MDBCol>

                          <MDBCol
                            md="10"
                            lg="6"
                            className="order-1 order-lg-2 d-flex align-items-center">
                            <MDBCardImage
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
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
            </div>
          </div>
        </nav>

        <div className="landing_main_img">
          <img src={image4} width="450" height="450" alt="image4" />
        </div>
        <div className="landing_content">
          <p>The best flight deals to everywhere, from anywhere</p>
        </div>
        <div>
          <button className="search_flight">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/viewflightdetails">
              Search Flights
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Landingpage1;
