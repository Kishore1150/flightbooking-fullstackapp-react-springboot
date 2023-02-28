import React, { useEffect, useState } from "react";

const ViewSignup = () => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getusers")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  }, []);
  const[username,setUserName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  const handleClicks=(e)=>{
    e.preventDefault()
    const user={username,email,password}
    console.log(user)
    fetch("http://localhost:8080/saveusers",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
  
  }).then(()=>{
    console.log("New User Added")
  })
  }

  return (
    <div>
    

    <form className="flightpost_form" onSubmit={handleClicks}>
      <h4 className="text-center">Add users</h4>
    <div class="form-group ">
      {/* <label for="flightid">FlightID</label> */}
      <input type="text" class="form-control"  value={username} id="inputflightId"   onChange={(e)=>setUserName(e.target.value)} aria-describedby="emailHelp" placeholder="Enter Username" required/>
    </div>
    <div class="form-group">
      {/* <label for="flightnumber">FlightNumber</label> */}
      <input type="text"   value={email}
      onChange={(e)=>setEmail(e.target.value)} class="form-control" id="inputflightimage" placeholder="Enter email " required/>
    </div>
    <div class="form-group">
      {/* <label for="flightnumber">FlightNumber</label> */}
      <input type="password"   value={password}
      onChange={(e)=>setPassword(e.target.value)} class="form-control" id="inputflightnumber" placeholder="Enter password" required/>
    </div>
    <button  type="submit" class="btn btn-primary">Add users</button>

  </form>

      <tbody>
        {Users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default ViewSignup;
