import React , { useState, useContext } from 'react'
import { UserContext } from '../../context/user'
import Input from './components/input'
import { logup, userDatabase  } from '../../firebase/firebase'
import './signUpAuth.css'
import { Link } from 'react-router-dom'

const SignUpAuth = () => {

  const { setCurrentUser } = useContext(UserContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 
  const signUp = async() => {
    try{
      const {user} = await logup(email, password)
      await userDatabase(user)
      setCurrentUser(user)
      alert('successful')
    } catch(error) {
      alert('account creation failed')
    }
  }

  return (
    <div className='logup'>
      <div className='left'>
        <Link to={'/'}><span className='arrow'>&larr;</span></Link>
        <div className='text'>
          <p>welcome to my first app</p>
          <p>reading makes you a king without a crown</p>
        </div>
      </div>
      <div className='right'>
        <div>
          <h2>CREATE ACCOUNT</h2>
          <Input required type="email" label='email' onChange={(event) => setEmail(event.target.value)} ></Input>
          <Input required label='password' type='password' onChange={(e) => setPassword(e.target.value)} ></Input>
          <button onClick={signUp}>create</button>
        </div>
      </div>
    </div>
  )
}

export default SignUpAuth