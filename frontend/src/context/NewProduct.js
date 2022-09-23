import React, {useState, createContext} from 'react'


export const NewProductContext = createContext()

const NewProductProvider = ({ children }) => {

  const [nameCategory, setNameCategory] = useState("");
  const [categorySelected, setCategorySelected] = useState("");
  const [name, setName] = useState("")
  const [direction, setDirection] = useState("")
  const [description, setDescription] = useState("")
  const [citySelected, setCitySelected] = useState("")
  const [pool, setPool] = useState(false);
  const [grill, setGrill] = useState(false);
  const [gym, setGym] = useState(false);
  const [laundry, setLaundry] = useState(false);
  const [heating, setHeating] = useState(false);
  const [pets, setPets] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [ac, setAc] = useState(false);
  const [image1, setImage1] = useState("")
  const [image2, setImage2] = useState("")
  const [image3, setImage3] = useState("")
  const [image4, setImage4] = useState("")
  const [image5, setImage5] = useState("")
  const [norms, setNorms] = useState("")
  const [cancellationPolicy, setCancellationPolicy] = useState("")
  const [healthAndSecurity, setHealthAndSecurity] = useState("")
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)

  

  return (
    <>
      <NewProductContext.Provider 
      value = {{
        nameCategory,
        setNameCategory,
        discount,
        setDiscount,
        price,
        setPrice,
        citySelected,
        setCitySelected, 
        description, 
        setDescription, 
        categorySelected, 
        setCategorySelected,
        setName,
        name,
        direction,
        setDirection,
        pool,
        setPool,
        grill,
        setGrill,
        gym,
        setGym,
        laundry,
        setLaundry,
        heating,
        setHeating,
        pets,
        setPets,
        wifi,
        setWifi,
        ac,
        setAc,
        image1,
        setImage1,
        image2,
        setImage2,
        image3,
        setImage3,
        image4,
        setImage4,
        image5,
        setImage5,
        setCancellationPolicy,
        cancellationPolicy,
        norms,
        setNorms,
        healthAndSecurity,
        setHealthAndSecurity
        }}>
        {children}
      </NewProductContext.Provider>
    </>
  )
}

export default NewProductProvider