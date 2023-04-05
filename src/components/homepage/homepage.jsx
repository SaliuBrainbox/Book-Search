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
  const [ display, setDisplay ] = useState(false)


  useEffect(() => {
    const filter = books.filter((book) => (book.volumeInfo.title.toLocaleLowerCase().includes(data)))
    setFiltered(filter)
  }, [books, data])

  const filt = (event) => {
    const type = event.target.value.toLocaleLowerCase()
    setData(type)
  }

 useEffect( () => {
  if (search === '') {
    setDisplay(false)
  }
  else {
    setDisplay(true)
  }
 }, [search])
  
 
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
      <div className='view'>
        {
          display ? (
            <div className='main'>

              <div className='content'>
                {
                  filtered.map((book) => (<Card key={book.id} book={book}></Card>))
                }
              </div>
              <div className='side-c'>
                  <div className='side-right'>
                    tracker
                  </div>
                  <div className='down'>
                    this is the footer
                  </div>
                </div>
            </div>
          ) : (
            <div className='main'>

              <div className='empty'>
                <p> please search for a book in the search input or check your internet connection</p>
              </div>
                <div className='side-e'>
                  <div className='side-right'>
                    <h1>tracker</h1>
                  </div>
                  <div className='down'>
                    Saliu &copy;2023
                  </div>
                </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Homepage