import React from 'react';
import UserProvider from './context/UserContext.js';
import  Routers   from "./Routes/Routers.js"



function App() {
  return (
    <div>
    <UserProvider>
    <Routers/>
    </UserProvider>
    </div>
  );
}

export default App;
