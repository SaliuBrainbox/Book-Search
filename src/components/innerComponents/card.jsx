import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BooksContext } from '../../context/books'
import { LibraryContext } from '../../context/library'
import './card.scss'



const Card = ( {book} ) => {

  const { plus } = useContext(LibraryContext)
  const { libraries } = useContext(LibraryContext)
  const { selectedBook, setSelectedbook } = useContext(LibraryContext)
  const { setLibToggle } = useContext(LibraryContext)

  const addItem = () => {
    plus( book )
    setLibToggle(true)
  }

  const img = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail
  const id = book.id
  const title = book.volumeInfo.title
  const pages = book.volumeInfo.pageCount

  const style = {
    color: 'black',
    textDecoration: 'none'
  }


  return (

    <>
      <div className='product-card-container' key={id}>.
        <img src={img} alt={`${title}`} />
        <div className='footer'>
          <span className='page'> pages: {pages} </span>
          <span className='read'> <Link to={'/read'} style={style} onClick={() => setSelectedbook(book)} >read</Link> </span>
        </div>
        <button onClick={addItem} >add to library</button>
      </div>
    </>
 

  ) 
}

export default Card