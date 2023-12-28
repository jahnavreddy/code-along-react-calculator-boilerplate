import React from 'react'

const Button = ({handleInput,value}) => {
  return (
   <div>
     {/* <button onClick={()=>handleInput(value)}>+</button> */}
     <button onClick={()=>handleInput(value)}>-</button>


   </div> 
  )
}

export default Button