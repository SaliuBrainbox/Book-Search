import React, { useState, useEffect, useContext } from "react"
import { BooksContext } from "../context/books"
import { LibraryContext } from "../context/library"





const Recommendation = () => {

  const { books } = useContext(BooksContext)
  const { selectedBook } = useContext(LibraryContext)

  const [recommendedBooks, setRecommendedBooks] = useState([])

  useEffect(() => {
    if(selectedBook) {
      if (!selectedBook.volumeInfo.authors) {
        return alert('there is no author for this book');
      }
      else if (selectedBook.volumeInfo.authors.length > 1) {
        return alert('authors are more than one');
      }
      else {
        const recommendedBooks = books
        .filter(book => book.id !== selectedBook.id)
        .filter(book => book.volumeInfo.authors.every(author => selectedBook.volumeInfo.authors.includes(author)))
      setRecommendedBooks(recommendedBooks)
      console.log(selectedBook.volumeInfo.authors.length)
      }
    }
  }, [selectedBook, books])
  

  const Recbooks = () => {

   if (selectedBook === null) {
      return (
        <div>read a book to see Recommendations</div>
      )
    }
    else{
      
      return (
        <div>
        {
          selectedBook && ( 
            <div>
              <h2> {selectedBook.volumeInfo.title} </h2>
              <ul>
                {
                  recommendedBooks.map((rec) => (
                    <li key={rec.id}> {rec.volumeInfo.title} by {rec.volumeInfo.authors} </li>
                  ))
                }
              </ul>
            </div>
          )
        }
      </div>
      )
    }
  } 

  return ( 
    <div>
      <h1>Recommendations</h1>
      <Recbooks></Recbooks>
    </div>
  )
}

export default Recommendation