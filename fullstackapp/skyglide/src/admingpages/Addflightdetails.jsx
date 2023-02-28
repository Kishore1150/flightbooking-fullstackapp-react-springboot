import React,{useState} from 'react'
import '../Styles/Landingpage.css'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Added Successfully !',
{
  position:'top-center',
  style:{
    borderRadius:'10px',
    background:'black',
    color:'white'
  }
});


const Addflightdetails = () => {


  
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
  fetch("http://localhost:8080/saveflightdetails",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(flight)

}).then(()=>{
  console.log("New Flight added")
})
}
  return (
    <div> 
    <form className="flightpost_form" onSubmit={handleClick}>
      <h4 className="text-center">ADD FLIGHT DETAILS</h4>
    <div class="form-group ">
      {/* <label for="flightid">FlightID</label> */}
      <input type="text" class="form-control"  value={id} id="inputflightId"   onChange={(e)=>setId(e.target.value)} aria-describedby="emailHelp" placeholder="Enter Flight Id" required/>
    </div>
    <div class="form-group">
      {/* <label for="flightnumber">FlightNumber</label> */}
      <input type="text"   value={flightimage}
      onChange={(e)=>setFlightimage(e.target.value)} class="form-control" id="inputflightimage" placeholder="Enter ImageLink " required/>
    </div>
    <div class="form-group">
      {/* <label for="flightnumber">FlightNumber</label> */}
      <input type="text"   value={flightnumber}
      onChange={(e)=>setFlightnumber(e.target.value)} class="form-control" id="inputflightnumber" placeholder="Enter FlightNumber" required/>
    </div>
    <div class="form-group">
      {/* <label for="airlinename">Airlinename</label> */}
      <input type="text"   value={airlinename}
      onChange={(e)=>setAirlinename(e.target.value)} class="form-control" id="inputairlinename" placeholder="Enter AirlineName" required/>
    </div>
    <div class="form-group">
      {/* <label for="departurecity">Flight Departurecity</label> */}
      <input type="text"   value={departurecity}
      onChange={(e)=>setDeparturecity(e.target.value)} class="form-control" id="inputdeparturecity" placeholder="Enter Departurecity " required/>
    </div>
    <div class="form-group">
      {/* <label for="departuretime">Flight Departuretime</label> */}
      <input type="text"   value={departuretime}
      onChange={(e)=>setDeparturetime(e.target.value)} class="form-control" id="inputdeparturetime" placeholder="Enter DepartureTime" required/>
    </div>
    <div class="form-group">
      {/* <label for="arrivalcity">Flight Arrivalcity</label> */}
      <input type="text"   value={arrivalcity}
      onChange={(e)=>setArrivalcity(e.target.value)} class="form-control" id="inputarrivalcity" placeholder="Enter Flight Arrivalcity" required/>
    </div>
    <div class="form-group">
      {/* <label for="arrivaltime">Flight Arrivaltime</label> */}
      <input type="text"   value={arrivaltime}
      onChange={(e)=>setArrivaltime(e.target.value)} class="form-control" id="inputflightarrivaltime" placeholder="Enter FlightArrivaltime" required/>
    </div>
    <div class="form-group">
      {/* <label for="flighttotalseats">Flight Total seats</label> */}
      <input type="text"   value={totalseats}
      onChange={(e)=>setTotalseats(e.target.value)} class="form-control" id="inputflighttotalseats" placeholder="Enter TotalSeats" required/>
    </div>
    <div class="form-group">
      {/* <label for="exampleInputPassword1">Flightbooking</label> */}
      <input type="text"   value={flightbooking}
      onChange={(e)=>setFlightbooking(e.target.value)} class="form-control" id="inputflightbooking" placeholder="Enter Flightbooking" required/>
    </div>
    <div class="form-checks">
  
    <Link to="/viewflightdetails" style={{ textDecoration: 'none' }}>
  <p>View Flights</p>
</Link>
    <button  type="submit" class="btn btn-primary" onClick={notify}>Add Flights</button>
    </div>
    
    <Toaster />
    
  </form>
  <div>


  </div>

  </div>
  )
}

export default Addflightdetails