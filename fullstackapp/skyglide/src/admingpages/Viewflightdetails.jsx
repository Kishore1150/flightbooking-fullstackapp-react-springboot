import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import logo1 from "../assets/images/airplane8.gif";
import image3 from "../assets/images/login_image.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import logo2 from "../assets/images/india.png";
import "../Styles/Landingpage.css";
import axios from "axios";
import ClickAwayListener from "react-click-away-listener";
// import React, { useState } from "react";
import { useStates } from "../States";

const Viewflightdetails = () => {
  const [Flights, setFlights] = useState([]);
  const [Passengers, setPassengerDetails] = useState([]);
  const [Flightdetails,setFlightDetails] = useState([]);
  const { setDetails } = useStates();
  const [isShow, invokeModal] = React.useState(false);
  const [isShow1, invokeModal1] = React.useState(false);
  const [popup, setPopup] = useState(false);

  const Navigate = useNavigate();
  const gotoupdateflight = (flight) => {
    setDetails(flight);
    Navigate("/updateflightdetails");
  };
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

  // const [lang, setLang] = useState("en");
  useEffect(() => {
    fetch("http://localhost:8080/getflightdetails")
      .then((res) => res.json())
      .then((result) => {
        setFlights(result);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:8080/passengers/getpassengerdetails")
      .then((res) => res.json())
      .then((result) => {
        setPassengerDetails(result);
      });
  }, []);
  const getPassengerDetails = (id) => {
    axios
      .get(`http://localhost:8080/passengers/flightnumber/${id}`)
      .then((res) => {
        setPassengerDetails(res.data);
      });
  };
  const getflightdetails = (id) => {
    axios
    .get(`http://localhost:8080/getflightsbyid/${id}` )
    .then((res) => {
      setFlightDetails(res.data)

    })
  }

  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container">
          <Link class="navbar-brand" to="/">
            <img src={logo1} alt="logo1" width="30" height="24" />
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              <b>SKYGLIDE</b>
            </Link>
          </Link>
          <div className="App">
            <Button variant="white" className="navbar-button-1">
              English (UK) <img alt="flag" src={logo2} width="18" height="10" />{" "}
              India
            </Button>
            &nbsp;
          </div>
        </div>
      </nav>
    
      <div
        style={{
          backgroundColor: "#042759",
          color: "white",
          padding: "10px 20px",
        }}>

          
          
          
          
                  <button class="btn btn-primary  margin-left">
          {" "}
          <Link
            to="/addflightdetails"
            style={{ textDecoration: "none", color: "white" }}>
            Add Flights
          </Link>
        </button>
        <button class="btn btn-primary margin-left">
          {" "}
          <Link
            to="/deleteflightdetails"
            style={{ textDecoration: "none", color: "white" }}>
            Delete Flights
          </Link>
        </button>
  

        <button class="btn btn-primary  margin-left">
          {" "}
          <Link
            to="/updateflightdetails"
            style={{ textDecoration: "none", color: "white" }}>
            Update Flights
          </Link>
        </button>
      </div>

      <h4 style={{ backgroundColor: "#f1f2f8", padding: "10px 20px" }}>
        <b>Flights Available For Booking</b>
      </h4>
      {Flights.map((flight) => (
        <div class="container-fluid" style={{ backgroundColor: "#f1f2f8" }}>
          <div class="row">
            <div
              class="col-8 mt-4"
              onClick={() => {
                getPassengerDetails(flight.flightnumber);
                initModal();
              }}>
              <div
                class="card"
                style={{
                  border: "none",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}>
                <div class="card-horizontal">
                  <div class="img-square-wrapper">
                    <img
                      class="card-img-top"
                      style={{ padding: "10px 20px", borderRadius: "25px" }}
                      src={flight.flightimage}
                      height="200"
                      alt=""
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">
                      <td>
                        <b>{flight.airlinename}</b>
                      </td>
                    </h4>
                    <h6 class="card-title">
                      {" "}
                      <td>
                        <b>Flightnumber:</b>
                        {flight.flightnumber}
                      </td>
                    </h6>
                    <h6 class="card-title">
                      {" "}
                      <td>
                        <b>DepartureCity:</b>
                        {flight.departurecity}
                      </td>
                    </h6>
                    <h6 class="card-title">
                      {" "}
                      <td>
                        <b>DepartureTime:</b>
                        {flight.departuretime}
                      </td>
                    </h6>
                    <h6 class="card-title">
                      <td>
                        <b>ArrivalCity:</b>
                        {flight.arrivalcity}
                      </td>
                    </h6>
                    <h6 class="card-title">
                      <td>
                        <b>ArrivalTime:</b>
                        {flight.arrivaltime}
                      </td>
                    </h6>
                    <h6 class="card-title">
                      <td>
                        <b>TotalSeats:</b>
                        {flight.totalseats}
                      </td>
                    </h6>
                    <h6 class="card-title">
                      <td>
                        <b>Flightbooking:</b>
                        {flight.flightbooking}
                      </td>
                    </h6>
                    <button
                      class="btn btn-secondary  margin-left"
                      onClick={() => gotoupdateflight(flight)}><i  class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      class="btn btn-secondary  margin-left"
                      ><i  class="fa-solid fa-pen-to-square"></i>edit here
                    </button>

     

                    
                    <p class="card-text"></p>
                  </div>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 20 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      

      <Modal size="lg" show={isShow}>
        <Modal.Header closeButton onClick={initModal1}>
          <Modal.Title>Passenger details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Passenger Id</th>
                <th>Flight number </th>
                <th>Ticket number</th>
                <th>Passenger name</th>
                <th>Passenger Age</th>
                <th>passengers Address</th>
                <th>passengers Email</th>
              </tr>
            </thead>
            <tbody>
              {Passengers.map((passengers) => (
                <tr key={passengers.id}>
                  <td>{passengers.id}</td>
                  <td>{passengers.flightnumber}</td>
                  <td>{passengers.ticketnumber}</td>
                  <td>{passengers.customername}</td>
                  <td>{passengers.age}</td>
                  <td>{passengers.address}</td>
                  <td>{passengers.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Viewflightdetails;

<table className="table table-striped">
  {/* {Flights.map((flight) => (
  <div class="card" style={{width:"400px",margin:'10px 20px' }}   onClick={initModal}>
      <img  class="card-img-top"  src={flight.flightimage} height="200" alt=""/>
    <div class="card-block">
      <h5 class="card-title">{flight.airlinename}</h5>
    </div>
  </div>
))} */}

  {/* <tbody>
  {Flights.map((flight) => (
    <tr key={flight.id}>
      <td>{flight.id}</td>
      <td>{flight.image}</td>
      <td>{flight.flightnumber}</td>
      <td>{flight.airlinename}</td>
      <td>{flight.departurecity}</td>
      <td>{flight.departuretime}</td>
      <td>{flight.arrivalcity}</td>
      <td>{flight.arrivaltime}</td>
      <td>{flight.totalseats}</td>
      <td>{flight.flightbooking}</td>
    </tr>
  ))}
</tbody> */}
</table>;

{
  /* <p>{t('Welcome')}</p> */
}
{
  /* <label style={{fontSize:'15px'}}>{t('Choose')}: </label>

<select value={lang} onChange={handleChange} style={{width:'100px'}}>
  {languages.map(item => {
    return (<option key={item.value}
    value={item.value}>{item.text}</option>);
  })}
</select> */
}
{
  /* The option to open the popup */
}
