import axios from "axios"
import React, { useEffect, useState, createContext } from "react"


export const UserContext = createContext()
const UserProvider = ({ children }) => {

    const [logged, setLogged] = useState(false)
    const [user, setUser] = useState({})
    useEffect(() => {
        const loadData =  () => {
             axios.get("https://reqres.in/api/users/1").then((res) => {
                setUser(res.data.data);
            })
        }
        loadData();
    }, [])

    return (
        <>
            <UserContext.Provider value={{ user,logged,setLogged }}>
                {children}
            </UserContext.Provider>
        </>
    )
}
export default UserProvider
