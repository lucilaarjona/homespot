import React from 'react'
import { createContext } from 'react'

const CategoryContext= createContext();

const CategoryProvider = ({children}) => {
  return (
    <>
    <CategoryContext.Provider>
        {children}
    </CategoryContext.Provider>



    </>
  )
}

export {CategoryProvider};

export default CategoryProvider;