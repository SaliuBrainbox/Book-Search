import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BooksContext = createContext({
    books: [],
    setBooks: []
})

export const BooksProvider = ({children}) => {
    const [books, setBooks] = useState([])
    const [ search, setSearch ] = useState('')
    const [ event, setEvent ] = useState(false)

    const value = { books, setBooks, search, setSearch, event, setEvent }

    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCv8rIdYexJspe6hZHBXzWIblofa-TmMCc' + '&maxResults=40')
            .then((response) => setBooks(response.data.items))

    }, [event])

    return <BooksContext.Provider value={value}> {children} </BooksContext.Provider>

}