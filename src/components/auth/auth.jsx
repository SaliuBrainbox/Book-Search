import React, { useState } from 'react'
import Input from './components/input'
import { login, logup, googlelogin, userDatabase } from '../../firebase/firebase'
import { useContext } from 'react'
import { UserContext } from '../../context/user'
import './auth.css'


const Auth = () => {

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

  const signIn = async() => {
    try{
      const { user } = await login(email, password)
      setCurrentUser(user)
      alert('successful')
    } catch(error) {
      alert('login failed')
    }
  }

  return (
    <div>
      <div className='login'>
        <h2>LOGIN</h2>
        <Input required type="email" label='email' onChange={(event) => setEmail(event.target.value)} ></Input>
        <Input required label='password' type='password' onChange={(e) => setPassword(e.target.value)} ></Input>
        <button onClick={signIn}>login</button>
      </div>
      <br></br>
      <br></br>
      <div className='logup'>
        <h2>CREATE ACCOUNT</h2>
        <Input required type="email" label='email' onChange={(event) => setEmail(event.target.value)} ></Input>
        <Input required label='password' type='password' onChange={(e) => setPassword(e.target.value)} ></Input>
        <button onClick={signUp}>create</button>
      </div>
    </div>
  ) 
}

export default Auth