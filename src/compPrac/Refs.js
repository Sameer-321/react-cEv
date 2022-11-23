import React, { Component } from 'react'

export class Refs extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef();
 }
 componentDidMount(){
  this.ref.current.focus();
      }
  clickHandler(){
    alert(this.ref.current.value)
  }    

  render() {
    return (
      <div>
        <input type="text" ref={this.ref} />
        <button onClick={()=> {this.clickHandler()}}>Submit</button>
      </div>
    )
  }
}

export default Refs