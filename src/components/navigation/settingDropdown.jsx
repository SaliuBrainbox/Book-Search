import React from 'react'
import { Link } from 'react-router-dom'
import './settingDropdown.css'

const SettingDropdown = () => {

 const style = {
    textTransform: 'capitalize',
  }

  return (
    <ul className='dropdown-container'>
          <li><Link to={'/account'} style={style}>account</Link></li>
          <li><Link to={'/display'} style={style}>display</Link></li>
          <li><a href="#" style={style}>contact us</a></li>
    </ul>
  )
}

export default SettingDropdown