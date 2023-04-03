import React , { useState, useContext } from 'react'
import { UserContext } from '../../context/user'
import Input from './components/input'
import { login } from '../../firebase/firebase'

const SignInAuth = () => {

    const { setCurrentUser } = useContext(UserContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
      <div className='login'>
          <h2>LOGIN</h2>
          <Input required type="email" label='email' onChange={(event) => setEmail(event.target.value)} ></Input>
          <Input required label='password' type='password' onChange={(e) => setPassword(e.target.value)} ></Input>
          <button onClick={signIn}>login</button>
      </div>
  )
}

export default SignInAuth