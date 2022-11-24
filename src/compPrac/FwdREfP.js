import React from 'react'
import FwdRefC from './FwdRefC'

var clickHandler = ()=>{
        this.ref.current.focus();
    }
function FwdREfP()
{
    var ref = React.createRef()
   
        return (
          <div>
            <FwdRefC ref={ref} />
            <button onClick={clickHandler}>Focus</button>
          </div>
        )
      
}
export default FwdREfP