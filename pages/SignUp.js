import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password);
  (async () => {
    let results = await fetch("https://63c69e4d7bc13e30efe4278c--searchinbackend.netlify.app/.netlify/functions/register"
    , {
method: "POST",

body: JSON.stringify({
fname,
email,
lname,
password,
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
alert(res.status);
})
.catch((error) => {          console.log("1s11")

/* ...*** handle/report error, since this code doesn't return the promise chain...*/
});}
)();




  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="signup">
        <h3>Sign Up</h3>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => this.setState({ fname: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={(e) => this.setState({ lname: e.target.value })}
          />
        </div>

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

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/SignIn">sign in?</a>
        </p>
      </form>
    );
  }
}