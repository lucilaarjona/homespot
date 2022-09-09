import React, { createContext, useState } from "react"

export const UserContext = createContext()
const UserProvider = ({ children }) => {

    const [logged, setLogged] = useState(false)
    const [user, setUser] = useState({
          email: " ",
          password: " ",
          name: "",
          surname: "",
        })
    // useEffect(() => {
    //     const loadData =  () => {
    //          axios.get("https://reqres.in/api/users/1").then((res) => {
    //             setUser(res.data.data);
    //         })
    //     }
    //     loadData();
    // }, [])

    return (
        <>
            <UserContext.Provider value={{ user,setUser, logged,setLogged }}>
                {children}
            </UserContext.Provider>
        </>
    )
}
export default UserProvider
