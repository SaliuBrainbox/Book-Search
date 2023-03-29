import React, { Fragment, useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { LibraryContext } from '../../context/library'
import { logut } from '../../firebase/firebase'
import logo from '../../image/logo.png'
import './navigation.css'
import SettingDropdown from './settingDropdown'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import Menu from './menu'


const Navigation = () => {


  const { toggle, setToggle } = useContext(LibraryContext)
  const [ menu, setMenu ] = useState(false)

  return (
    <Fragment >
      <div className='nav'>
        <div className="logo">
          <img src= {logo} alt='logo' />
        </div> 
        <div className='nav-list'>
          <ul className='list'>
            <li><Link to={'/'}>home</Link></li>
            <li className='dropdown'><a onClick={() => setToggle(!toggle)} >more &#9660;</a>
              {
                toggle && (
                  <SettingDropdown></SettingDropdown>
                )
              }
            </li>
            <li><Link to={'/recommendedBook'} >recommended books</Link></li>
            <li><Link to={'/library'}>library</Link></li>
          </ul>
          
        </div>
        <div className="control-panel">
          <button onClick={logut}> SIGN OUT </button>
        </div>
        <div className='nav-menu'>
          
          {
            menu ? 
            <RiCloseLine color='#fff' size= {27} onClick= {() => setMenu(false)} className='menu-icon'/>
          : <RiMenu3Line color='#fff' size= {27} onClick= {() => setMenu(true)} className='menu-icon'/>
          }

          {
            menu && 
            ( <Menu></Menu> )
          }

        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
  )
}
export default Navigation