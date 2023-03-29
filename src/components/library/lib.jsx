import React, { useContext } from 'react'
import { LibraryContext } from '../../context/library' 
import './lib.css'

const Lib = ({library}) => {

    const title = library.volumeInfo.title
    const img = library.volumeInfo.imageLinks && library.volumeInfo.imageLinks.smallThumbnail

    const { remove } = useContext(LibraryContext)
    const { setDel, del } = useContext(LibraryContext) 

    const out = () => { 
      remove(library) 
      setDel(true)
    }


  return (
    <div className='lib-container'>
        <img src= {img} alt={title} className='image-container'/>
        <span className='name'> {title} </span>
        <span className='remove-button' onClick={out}> &times; </span>
    </div>
  )
}

export default Lib