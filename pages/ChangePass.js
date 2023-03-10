import React, { Component } from "react";
import Head from 'next/head'

export default class ChangePass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oPassword: "",
      nPassword0: "",
      nPassword1:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { oPassword, nPassword0,nPassword1 } = this.state;
    if(!(nPassword0==nPassword1)){
        alert("The new password not the same!")
    }else{
      (async () => {
        let results = await fetch("https://searchinbackend.netlify.app/.netlify/functions/changePassword"
        , {
    method: "POST",
    body: JSON.stringify({
        token: window.localStorage.getItem("token"),
        oPassword,
        nPassword0,
    }),
    }).then((response) => {
    // *** Check for HTTP failure
    console.log(response)
    if (!response.ok) {
      console.log(response.status)
      if(response.status=="401" ||response.status=="500" ){
        alert("wrong  old password");
      }
    throw new Error("HTTP status " + response.status);
    }
    // *** Read and parse the JSON          
    
    return response.json();
    })
    .then((response) => {
    // *** Use the object

      alert("password changed!");

    


    })
    .catch((error) => {   

    
    /* ...*** handle/report error, since this code doesn't return the promise chain...*/
    });}
    )()};


  }
  render() {
    return (
      <>
      <Head>

      <title>Change Password</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/icon.png" />
    </Head>
      <form onSubmit={this.handleSubmit} className="signin">
        <h3>Change Password</h3>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter old password"
            onChange={(e) => this.setState({ oPassword: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter  new password"
            onChange={(e) => this.setState({ nPassword0: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Re enter new password"
            onChange={(e) => this.setState({ nPassword1: e.target.value })}
          />
        </div>



        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/">Go Back</a>
        </p>

      </form>
      </>
    );
  }
}