import React from 'react';
import NewProductProvider from './context/NewProduct.js';
import UserProvider from './context/UserContext.js';
import  Routers   from "./Routes/Routers.js"




function App() {
  return (
    <div>
    <NewProductProvider>
    <UserProvider>
    <Routers/>
    </UserProvider>
    </NewProductProvider>
    </div>
  );
}

export default App;
