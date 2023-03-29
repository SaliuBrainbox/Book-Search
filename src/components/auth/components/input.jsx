import React from 'react';
import './input.scss';


const Input = ( {label, ...otherprops} ) => {
  return (
    <div className="group">
        <label className= 'form-input-label shrink'  >{label}</label>
        <input className='form-input' {...otherprops} />
    </div>
  )
}

export default Input 