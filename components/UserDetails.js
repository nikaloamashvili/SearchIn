import React, { Component } from "react";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }
  componentDidMount() {
      fetch("https://63c69e4d7bc13e30efe4278c--searchinbackend.netlify.app/.netlify/functions/userData", {
    method: "POST",
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
    .then((response) => {
      // *** Check for HTTP failure
      console.log(response)
      if (!response.ok) {
      throw new Error("HTTP status " + response.status);
      }
      // *** Read and parse the JSON                
      return response.json();
      })
      .then((res) => {
      // *** Use the object
      this.setState({ userData: res.data });

      })
      .catch((error) => {          
        console.log("error")
      });
  }

  render() {
    
    return (
      
        <h2 className="nav-text">hello {this.state.userData.fname} {this.state.userData.lname}</h2>
      
    );
  }
}