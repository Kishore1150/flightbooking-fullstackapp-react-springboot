import React,{useEffect, useState} from 'react'

import '../Styles/Landingpage.css'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { useStates } from '../States';

const notify = () => toast.success('Updated Successfully !',
{
  position:'top-center',
  style:{
    borderRadius:'10px',
    background:'black',
    color:'white'
  }
});


const Updateflightdetails = () => {

  const {
    details 
  } = useStates();


  useEffect(() => {

    setId(details?.id)
setFlightimage(details?.flightimage)
setFlightnumber(details?.flightnumber)
setAirlinename(details?.airlinename)
setDeparturecity(details?.departurecity)
setDeparturetime(details?.departuretime)
setArrivalcity(details?.arrivalcity)
setArrivaltime(details?.arrivaltime)
setTotalseats(details?.totalseats)
setFlightbooking(details?.flightbooking)
  } ,[details]);


  
  const[id,setId]=useState('')
  const[flightimage,setFlightimage]=useState('')

  const[flightnumber,setFlightnumber]=useState('')
  const[airlinename,setAirlinename]=useState('')
  const[departurecity,setDeparturecity]=useState('')
  const[departuretime,setDeparturetime]=useState('')
  const[arrivalcity,setArrivalcity]=useState('')
  const[arrivaltime,setArrivaltime]=useState('')
  const[totalseats,setTotalseats]=useState('')
  const[flightbooking,setFlightbooking]=useState('')
  // const[Flights,setFlights]=useState([])

const handleClick=(e)=>{
  e.preventDefault()
  const flight={id,flightimage,flightnumber,airlinename,departurecity,departuretime,arrivalcity,arrivaltime,totalseats,flightbooking}
  console.log(flight)
  fetch("http://localhost:8080/updateflightdetails",{
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(flight)

}).then(()=>{
  console.log(" Flight Updated")
})
}
  return (
    <div> 
    <form className="flightpost_form" onSubmit={handleClick}>
      <h4 className="text-center">Update FLIGHT DETAILS</h4>
    <div class="form-group ">
      {/* <label for="flightid">FlightID</label> */}
      <input type="text" class="form-control"  value={id} id="inputflightId" disabled  onChange={(e)=>setId(e.target.value)} aria-describedby="emailHelp" placeholder="Enter Flight Id"/>
     
    </div>
    <div class="form-group">
      {/* <label for="flightnumber">FlightNumber</label> */}
      <input type="text"   value={flightimage}
      onChange={(e)=>setFlightimage(e.target.value)} class="form-control" id="inputflightimage" placeholder="Enter ImageLink "/>
    </div>
    <div class="form-group">
      {/* <label for="flightnumber">FlightNumber</label> */}
      <input type="text"   value={flightnumber}
      onChange={(e)=>setFlightnumber(e.target.value)} class="form-control" id="inputflightnumber" placeholder="Enter FlightNumber"/>
    </div>
    <div class="form-group">
      {/* <label for="airlinename">Airlinename</label> */}
      <input type="text"   value={airlinename}
      onChange={(e)=>setAirlinename(e.target.value)} class="form-control" id="inputairlinename" placeholder="Enter AirlineName"/>
    </div>
    <div class="form-group">
      {/* <label for="departurecity">Flight Departurecity</label> */}
      <input type="text"   value={departurecity}
      onChange={(e)=>setDeparturecity(e.target.value)} class="form-control" id="inputdeparturecity" placeholder="Enter Departurecity "/>
    </div>
    <div class="form-group">
      {/* <label for="departuretime">Flight Departuretime</label> */}
      <input type="text"   value={departuretime}
      onChange={(e)=>setDeparturetime(e.target.value)} class="form-control" id="inputdeparturetime" placeholder="Enter DepartureTime"/>
    </div>
    <div class="form-group">
      {/* <label for="arrivalcity">Flight Arrivalcity</label> */}
      <input type="text"   value={arrivalcity}
      onChange={(e)=>setArrivalcity(e.target.value)} class="form-control" id="inputarrivalcity" placeholder="Enter Flight Arrivalcity"/>
    </div>
    <div class="form-group">
      {/* <label for="arrivaltime">Flight Arrivaltime</label> */}
      <input type="text"   value={arrivaltime}
      onChange={(e)=>setArrivaltime(e.target.value)} class="form-control" id="inputflightarrivaltime" placeholder="Enter FlightArrivaltime"/>
    </div>
    <div class="form-group">
      {/* <label for="flighttotalseats">Flight Total seats</label> */}
      <input type="text"   value={totalseats}
      onChange={(e)=>setTotalseats(e.target.value)} class="form-control" id="inputflighttotalseats" placeholder="Enter TotalSeats"/>
    </div>
    <div class="form-group">
      {/* <label for="exampleInputPassword1">Flightbooking</label> */}
      <input type="text"   value={flightbooking}
      onChange={(e)=>setFlightbooking(e.target.value)} class="form-control" id="inputflightbooking" placeholder="Enter Flightbooking"/>
    </div>
    <div class="form-check">
  
    </div>
    
    <button  type="submit" class="btn btn-primary" onClick={notify}>Update Flights</button>
    <Toaster />
    <Link to="/viewflightdetails" style={{ textDecoration: 'none' }}>
  <p>View Flights</p>
</Link>
    
  </form>
  </div>
  )
}

export default Updateflightdetails