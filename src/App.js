import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import { useState } from "react";



function App() {
    const [users, setusers] = useState([
        {
            username: "jhon",
            password: "123"
        }
    ])
  return (
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login users = {users} setusers = {setusers}/>}></Route>
          <Route path='/SignUp' element={<SignUp users = {users} setusers = {setusers}/>}></Route>
          <Route path='/Home' element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
