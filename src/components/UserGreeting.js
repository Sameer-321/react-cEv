import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  logIn() {
    this.setState((prevState) => ({
      isLoggedIn: true,
    }));
  }
  signOut() {
    this.setState((prevState) => ({
      isLoggedIn: false,
    }));
  }

  render() {
    return this.state.isLoggedIn ? (
      <div>
        <div>Welcome Sameer</div>
        <button onClick={() => this.signOut()}>Sign Out</button>
      </div>
    ) : (
      <div>
        <div>Welcome Guest</div>
        <button onClick={() => this.logIn()}>Log in</button>
      </div>
    );

    //     if (this.state.isLoggedIn) {
    //       //if this is true then render this
    //       return (
    //         <div>
    //           <div>Welcome Sameer</div>
    //           <button onClick={() => this.signOut()}>Sign Out</button>
    //         </div>
    //       );
    //     } else {
    //       return (
    //         <div>
    //           <div>Welcome Guest</div>
    //           <button onClick={() => this.logIn()}>Log in</button>
    //         </div>
    //       );
    //     }
    //   }
  }
}

export default UserGreeting;
