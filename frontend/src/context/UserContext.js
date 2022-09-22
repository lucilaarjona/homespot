import React, { createContext, useState } from "react"

export const UserContext = createContext()
const UserProvider = ({ children }) => {

    const login = localStorage.getItem("token") && true
    const [logged, setLogged] = useState(login)

    const [user, setUser] = useState({
        name: " ",
        lastname: " ",
        username: " ",
        email: " ",
        city: "",
        roles: " "
      })
   
    return (
        <>
            <UserContext.Provider value={{ user,setUser, logged,setLogged }}>
                {children}
            </UserContext.Provider>
        </>
    )
}
export default UserProvider
