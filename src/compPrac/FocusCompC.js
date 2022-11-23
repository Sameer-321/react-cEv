import React, { Component } from 'react'

class FocusCompC extends Component {
    constructor(props) {
      super(props)
        this.refp =React.createRef();
    }
    focusC(){
        this.refp.current.focus()
    }
  render() {
    return (
      <input  refp={this.refp} />
    )
  }
}

export default FocusCompC