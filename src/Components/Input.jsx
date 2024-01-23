import React from 'react'
import "./input.css"
const Input = ({label}) => {
  return (
    <div className="label">
        <label>{label}</label><br />
        <input type="number" placeholder='$'/>
    </div>
  )
}

export default Input