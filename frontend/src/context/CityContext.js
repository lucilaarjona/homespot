import React, {useState, createContext} from 'react'


export const CityContext = createContext()

const CityProvider = ({ children }) => {

  const [citySelected, setCitySelected] = useState("")

  return (
    <>
      <CityContext.Provider value = {{ citySelected, setCitySelected}}>
        {children}
      </CityContext.Provider>
    </>
  )
}

export default CityProvider