import './App.css';
import Auth from './components/auth/auth';
import Navigation from './components/navigation/navigation';
import Homepage from './components/homepage/homepage';
import { Fragment, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from './context/user';
import { logut } from './firebase/firebase';
import Setting from './components/setting/setting';
import Recommendation from './recommendation/recommendation';
import Library from './components/library/library';
import Read from './components/innerComponents/read';
import Account from './components/setting/innerComponents/account';
import Display from './components/setting/innerComponents/display';
import SignUpAuth from './components/auth/signUpAuth';
import SignInAuth from './components/auth/signInAuth';


function App() {

  const {currentUser} = useContext(UserContext)

  


  return (
    <div className='App'>
      {
        currentUser ? 
        (
            <Fragment>
              <Routes>
                <Route path='/' element={<Navigation></Navigation>}>
                  <Route index element={<Homepage></Homepage>}></Route>
                  <Route path='/setting' element={<Setting></Setting>}></Route>
                  <Route path='/recommendedBook' element={<Recommendation></Recommendation>}></Route>
                  <Route path='library' element={<Library></Library>}></Route>
                  <Route path='/read' element={<Read></Read>}></Route>
                  <Route path='/account' element={<Account></Account>}></Route>
                  <Route path='/display' element={<Display></Display>}></Route>
                </Route>
              </Routes>
            </Fragment>
        ) :
        (
          <Fragment>
              <Routes>
                <Route path='/' element={<Auth></Auth>}>
                  <Route index element={<SignInAuth></SignInAuth>}></Route>
                </Route>
                 <Route path='/signUp' element={<SignUpAuth></SignUpAuth>}></Route>
              </Routes>
          </Fragment>
        )
      }
    </div>
  );
}

export default App;
