import React, { useContext, useEffect, useState } from 'react'
import Card from '../innerComponents/card'
import { BooksContext } from '../../context/books'
import './homepage.css'


const Homepage = () => {

  const { books } = useContext(BooksContext)
  const { search, setSearch } = useContext(BooksContext)
  const { event, setEvent } = useContext(BooksContext)
  
  const [ data, setData ] = useState('')
  const [filtered, setFiltered] = useState(books)


  useEffect(() => {
    const filter = books.filter((book) => (book.volumeInfo.title.toLocaleLowerCase().includes(data)))
    setFiltered(filter)
  }, [books, data])

  const filt = (event) => {
    const type = event.target.value.toLocaleLowerCase()
    setData(type)
  }
  
  const Home = () => {
    if (search === '') {
      return ( <div className='empty'>
        <p> please search for a book in the search input or check your internet connection</p>
      </div> )
    }
    else {
      return (
        <div>
          <div className='content'>
            {
              filtered.map((book) => (<Card key={book.id} book={book}></Card>))
            }
          </div>
        </div>
      )
    }
  }
  
  return (
    <div className='home'>
      <div className='input'>
        <div className='search'>
        <input type="search" placeholder='Search For Book' value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => setEvent(!event)}>search</button> 
        </div>
        <div className='filter'>
          <input type="search" placeholder='Filter' onChange={filt} />
        </div>
      </div>
      <Home></Home>
    </div>
  )
}

export default Homepage