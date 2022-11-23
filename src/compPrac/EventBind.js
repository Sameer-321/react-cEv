import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"hello, Sameer"
      }
    }
    clickHandler(){
        this.setState({
            message:"Goodbye, Sameer dai don"
        })
    }
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={()=>{this.clickHandler()}}>Click</button>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
      </div>
    )
  }
}

export default EventBind