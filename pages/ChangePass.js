// import React, { Component } from "react";
// import Head from 'next/head'

// export default class ChangePass extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       oldPassword: "",
//       password: "",
//       confirmPassword:""
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }


//   render() {
//     return (
//       <>
//       <Head>
//       <title>Search In</title>
//       <meta name="description" content="Generated by create next app" />
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <link rel="icon" href="/icon.png" />
//     </Head>
//       <form onSubmit={this.handleSubmit} className="signin">
//         <h3>Change Password</h3>

//         <div className="mb-3">
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter old password"
//             onChange={(e) => this.setState({ oldPassword: e.target.value })}
//           />
//         </div>

//         <div className="mb-3">
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//             onChange={(e) => this.setState({ password: e.target.value })}
//           />
//         </div>

//         <div className="mb-3">
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Confirm New Password"
//             onChange={(e) => this.setState({ confirmPassword: e.target.value })}
//           />
//         </div>

//         <div className="d-grid">
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </div>

//         <p className="forgot-password text-right">
//           <a href="/">Go Back</a>
//         </p>
//       </form>
//       </>
//     );
//   }
// }