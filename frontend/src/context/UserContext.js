import axios from "axios"
import React, { useEffect, useState, createContext } from "react"
import axiosHelper from "../helper/axiosHelper"

export const UserContext = createContext()
const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})
    useEffect(() => {
        const loadData = async () => {
            await axios.get("https://reqres.in/api/users/1").then((res) => {
                setUser(res.data);
            })
        }
        loadData();
        console.log(user);
    }, [])
    return (
        <>
            <UserContext.Provider value={{ user }}>
                {children}
            </UserContext.Provider>
        </>
    )
}
export default UserProvider
