import { createContext, useEffect, useState } from "react";
import { change, userDatabase } from "../firebase/firebase";

export const UserContext = createContext({
    currentUser : null,
    setCurrentUser : null
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    
    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        const unsuscribe = change((user) => {
            if (user) {
                userDatabase(user)
            }
            setCurrentUser(user)
        })

        return unsuscribe
    }, [])

    return <UserContext.Provider value={value}> {children} </UserContext.Provider>
}