import { createContext, useState } from "react"



const addLibrary = ( libraries, add ) => {
   const existing = libraries.find((library) => library.id === add.id)
   
   if(existing){
    return libraries.map((library) => library.id === add.id ? {...library} : library )
   }
   
   return [ ...libraries, { ...add } ]
}

const delLibrary = ( libraries, del ) => {
   return libraries.filter((library) => library.id !== del.id)
}


export const LibraryContext = createContext({
    libraries: [],
    selectedBook: null,
    toggle: false
})


export const LibraryProvider = ( {children} ) => {
    const [ libraries, setLibraries ] = useState([])
    const [selectedBook, setSelectedbook] = useState(null)
    const [recommendedBooks, setRecommendedBooks] = useState([])
    const [ toggle, setToggle ] = useState(false)
    const [ libToggle, setLibToggle ] = useState(false)
    const [ del, setDel ] = useState(false)

    const plus = (add) => {
        setLibraries(addLibrary(libraries, add))
        alert('added to library')
    }

    const remove = (del) => {
        setLibraries(delLibrary(libraries, del))
    }

    const value = {
        libraries,
        setLibraries,
        plus,
        remove, 
        selectedBook,
        setSelectedbook,
        toggle,
        setToggle,
        libToggle,
        setLibToggle,
        del,
        setDel
    }

    return <LibraryContext.Provider value={value}> {children} </LibraryContext.Provider>
}