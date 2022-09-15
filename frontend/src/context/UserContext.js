import React, { createContext, useState } from "react"

export const UserContext = createContext()
const UserProvider = ({ children }) => {

    const login = localStorage.getItem("token") && true
    const [logged, setLogged] = useState(login)
    const dataUser = JSON.parse(localStorage.getItem("user"));
    console.log(dataUser);

    const [user, setUser] = useState({
        // name: dataUser.name,
        // lastname: dataUser.name,
        // username: dataUser.email,
        // email: dataUser.email,
        // city: "",
        // roles: dataUser.rol
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
