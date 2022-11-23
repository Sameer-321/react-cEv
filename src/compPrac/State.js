import React, { Component } from 'react'
        

class State extends Component {
    constructor() {
        super()
      
        this.state = {
           isLoggedIn:false
        }
    }
clickHandler(){
    (!this.state.isLoggedIn)?(
        this.setState({
            isLoggedIn:true
}))
    :
    (
    this.setState({
        isLoggedIn:false
    }))

  
}
   
    //using if else for showing the particular div hehe
    render(){
        return(
        (this.state.isLoggedIn)?
       (
        <div> 
        <p>You have successfully Logged in</p>
        <button onClick={()=>{this.clickHandler()}}>Signout</button> 
        </div>
        )    
        :
        (
         <div>
         <p>Please login?!</p>
        <button onClick={()=>{this.clickHandler()}}>Login</button>
        </div>)     

    )}




//   render() {    //render method for changing the word like var
//     return (
//         <React.Fragment>
//             <div>Hello,{this.state.message} </div>
//       <button onClick={()=>this.clickHandler()}>Login</button>
//         </React.Fragment>      
//     )
//   }
}

export default State