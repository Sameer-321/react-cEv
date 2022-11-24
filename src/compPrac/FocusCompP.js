import React, { Component } from 'react'
import FocusCompC from './FocusCompC';

class FocusCompP extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef();
  }

  refer= ()=>{
    this.ref.current.focusC()
  }

  render() {
    return (
      <div>
        <FocusCompC ref={this.ref}/>
        <button onClick={this.refer} >Focus</button>
      </div>
    )
  }
}

export default FocusCompP