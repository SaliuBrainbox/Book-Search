import React, { useContext } from 'react'
import { LibraryContext } from '../../context/library'
import Lib from './lib'

const Library = () => {

    const {libraries} = useContext(LibraryContext)
    const { libToggle } = useContext(LibraryContext)
    const { del } = useContext(LibraryContext)
    

    const LibraryDisplay = () => {
      if ( libToggle === false) {
        return (
          <div> no book is added to library </div>
        )
      }
      else if (del === true) {
        if (libraries.length === 0) {
          return (
            <div>items are deleted</div>
          )
        }
        else{
          return (
            <div>
            {
              libraries.map((library) => <Lib key={library.id} library={library}></Lib>)
            }
          </div>
          )
        }
      }
      else {
        return (
          <div>
            {
              libraries.map((library) => <Lib key={library.id} library={library}></Lib>)
            }
          </div>
        )
      }
    }


  return (
    <LibraryDisplay></LibraryDisplay>
  )
}

export default Library