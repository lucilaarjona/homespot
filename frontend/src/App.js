// import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import React from 'react';
import NewProductProvider from './context/NewProduct.js';
import UserProvider from './context/UserContext.js';
import  Routers   from "./Routes/Routers.js"




function App() {
  return (
    <>
    <NewProductProvider>
    <UserProvider>
    <Routers/>
    </UserProvider>
    </NewProductProvider>
    </>
  );
}

export default App;
