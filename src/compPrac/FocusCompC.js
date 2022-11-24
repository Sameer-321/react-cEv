import React, { Component } from 'react'

 class FocusCompC extends Component {
  
  constructor(props) {
    super(props)
    this.refChild = React.createRef();   
  }

  focusC=()=>{
    this.refChild.current.focus()
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.refChild} />
      </div>
    )
  }
}

export default FocusCompC