import React, { Component } from "react";
import Head from 'next/head'

export default class ForgotPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
  (async () => {
    let results = await fetch("https://searchinbackend.netlify.app/.netlify/functions/ForgotPass"
    , {
method: "POST",
      body: JSON.stringify({
      email
      }),
}).then((response) => {
// *** Check for HTTP failure
console.log(response)
if (!response.ok) {
console.log("fdssdf")
throw new Error("HTTP status " + response.status);
}
// *** Read and parse the JSON          
console.log("111")

return response.json();
})
.then((res) => {
// *** Use the object
alert("password changed!");
})
.catch((error) => {          console.log("1s11")
alert("can't change pass try later!");

/* ...*** handle/report error, since this code doesn't return the promise chain...*/
});}
)();




  }
  render() {
    return (
      <>
      <Head>

      <title>Forgot Password</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/icon.png" />
    </Head>
      <form onSubmit={this.handleSubmit} className="signup">
        <h3>Forgot Password</h3>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

      

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Reset password
          </button>
        </div>

        <p className="forgot-password text-right">
          Remember the password? <a href="/SignIn">sign in?</a>
        </p>
      </form>
      </>
    );
  }
}