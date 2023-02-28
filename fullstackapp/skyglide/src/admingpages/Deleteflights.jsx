import React from "react";

import axios from "axios";

import { Link } from "react-router-dom";


export default class Deleteflights extends React.Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get(`http://localhost:8080/getflightdetails`).then((res) => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  deleteRow(id, e){
    axios.delete(`http://localhost:8080/deleteflights/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        const posts = this.state.posts.filter(item => item.id !== id);
        this.setState({ posts });
      })

  }

  render() {
    return (
      <div>
        <h1> Delete Flight Details </h1>

        <table class="table table-striped ">
          <thead  style={{backgroundColor: '#33568b',color:'white',borderRadius:'10px'}}>
            <tr>
              <th>Flight Id</th>
              <th>Flight Number</th>
              <th>Flight Name</th>
              <th>Flight Departure city</th>
              <th>Flight Departure Time</th>
              <th>Flight Arrival City</th>
              <th>Flight Arrival Time</th>
              <th>Flight Total seats</th>
              <th>Flight Booking </th>
              <th>Edit </th>
              <th>Delete  </th>
            </tr>
          </thead>

          <tbody>
            {this.state.posts.map((post) => (
              <tr>
                <td>{post.id}</td>
                <td>{post.flightnumber}</td>
                <td>{post.airlinename}</td>
                <td>{post.departurecity}</td>
                <td>{post.departuretime}</td>
                <td>{post.arrivalcity}</td>
                <td>{post.arrivaltime}</td>
                <td>{post.totalseats}</td>
                <td>{post.flightbooking}</td>

                <td><Link to="/updateflightdetails"><i  class="fa-solid fa-pen-to-square"></i></Link></td>
                 <td><i onClick={(e) => this.deleteRow(post.id, e)} class="fa-solid fa-trash"></i></td>
            
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
