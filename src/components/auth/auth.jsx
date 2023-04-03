import React from 'react'
import './auth.css'
import { Link } from 'react-router-dom'
import SignInAuth from './signInAuth'
import book from '../../image/book.jpg'



const Auth = () => {

  const style = {
    color:"white"
  }

  return (
    <div >
      <div className='logo-container'>
        <img src={book} alt="logo"  className='logo'/>
      </div>
      <div className='auth'>
        <SignInAuth></SignInAuth>
      </div>
      <p>
        Don't have an account ? <Link to={'/signUp'} style={style}>create account</Link>
      </p>
    </div>
  ) 
}

export default Auth