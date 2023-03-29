import React from 'react'
import { Link } from 'react-router-dom'
import { logut } from '../../firebase/firebase'
import './menu.css'

const Menu = () => {

    const style = {
        textDecoration: 'none',
        color: 'white'
    }

  return (
    <div className='container'>
        <Link style={style} to={'/'}>home</Link>
        <Link style={style} to={'/account'}>account setting</Link>
        <Link style={style} to={'/display'}>display setting</Link>
        <Link style={style} to={'/library'}>library</Link>
        <Link style={style} to={'/recommendedBook'}>recommended books</Link>
        <button onClick={logut}> SIGN OUT </button>
    </div>
  )
}

export default Menu