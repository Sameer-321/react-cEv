import React, { Component } from 'react'
import FocusCompC from './FocusCompC'
class FocusCompP extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }
    clickHandler(){
       this.ref.current.focusC();
    }
  
    render() {
    return (
        <React.Fragment>
      <FocusCompC  ref={this.ref}/>
      <button onClick={this.clickHandler} >~~Focus~~</button>
      </React.Fragment>
    )
  }
}

export default FocusCompP