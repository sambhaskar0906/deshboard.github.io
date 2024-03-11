import React from "react";
import{Routes, Route, BrowserRouter} from "react-router-dom"
import Home from "./Component/Home"
import User from "./Component/User"
import Customer from "./Component/Customer"
import Setting from "./Component/Setting";



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user"  element={<User />}></Route>
        <Route path="/customer" element={<Customer />}></Route>
        <Route path="/setting" element={<Setting />}></Route>
        
      </Routes>
    </BrowserRouter>
    

    </>
  );
}

export default App;
