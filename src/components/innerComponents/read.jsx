import React, { useContext, useEffect } from 'react'
import { LibraryContext } from '../../context/library'
import './detail.css'

const Read = () => {
  const { selectedBook } = useContext(LibraryContext)


  const description = selectedBook.volumeInfo.description
  const link = selectedBook.accessInfo.pdf.webReaderLink
  const img = selectedBook.volumeInfo.imageLinks && selectedBook.volumeInfo.imageLinks.smallThumbnail


  return (
    <div className='detail-container'>
      <div className='intro'>
        <div className='pic'>
          <img src={img} alt='pic' />
        </div>
        <div className='button'>
          <a href={link}> <button> more </button> </a>
        </div>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  )

}

export default Read