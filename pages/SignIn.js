import React, { Component } from "react";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      agreement:false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password ,agreement} = this.state;
    console.log(email, password);
      (async () => {
        let results = await fetch("https://63c69e4d7bc13e30efe4278c--searchinbackend.netlify.app/.netlify/functions/login-user"
        , {
    method: "POST",
    body: JSON.stringify({
        email,
        password,
    }),
    }).then((response) => {
    // *** Check for HTTP failure
    console.log(response)
    if (!response.ok) {
      console.log(response.status)
      if(response.status=="401" ||response.status=="500" ){
        alert("wrong password or username");
      }
    throw new Error("HTTP status " + response.status);
    }
    // *** Read and parse the JSON          
    
    return response.json();
    })
    .then((response) => {
    // *** Use the object

      alert("login successful");
      console.log(email);
      window.localStorage.setItem("token", response.data);
      window.localStorage.setItem("email",email)
      window.localStorage.setItem("loggedIn", true);
      window.localStorage.setItem("stay", agreement);
      window.location.href = "./";
    


    })
    .catch((error) => {   

    
    /* ...*** handle/report error, since this code doesn't return the promise chain...*/
    });}
    )();






  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="signin">
        <h3>Sign In</h3>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
              onChange={(e) => this.setState({ agreement: e.target.value })}
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/SignUp">Sign Up</a>
        </p>
      </form>
    );
  }
}