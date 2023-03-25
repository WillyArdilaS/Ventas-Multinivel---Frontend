import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartProvider from "./context/CartContext";
import Login from "./pages/LogIn";
import Home from "./pages/Home";
import SignUpC from "./pages/SignUpC";
import SignUpR from "./pages/SignUpR";
import ShoppingCart from "./pages/ShoppingCart";
import RatingsRV from "./pages/RatingsRV";
import Payroll from "./pages/Payroll";
import ShowRV from "./pages/ShowRV";

function App() {
  const [user, setUser] = useState("");
  const [gradient, setGradient] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    const savedUser = sessionStorage.getItem("user");
    setUser(savedUser);
  }, []);

  useEffect(() => {
    if(sessionStorage.getItem("user") == "cliente") {
      setGradient("from-lightGreen to-darkGreen")
      setColor("darkGreen"); 
    } else if(sessionStorage.getItem("user") == "representante") {
      setGradient("from-lightBlue to-darkBlue")
      setColor("darkBlue"); 
    } else if(sessionStorage.getItem("user") == "master") {
      setGradient("from-lightBlue to-darkBlue")
      setColor("darkBlue"); 
    } 
    
  }, [user]);

  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/*" element={<Login setUser={setUser}/>} />
          <Route path="/LogIn" element={<Login setUser={setUser}/>} />
          <Route path="/Home" element={<Home setUser={setUser} gradient={gradient} color={color} />} />
          <Route path="/SignUpClient" element={<SignUpC setUser={setUser} gradient={gradient} color={color}/>} />
          <Route path="/SignUpRV" element={<SignUpR setUser={setUser} gradient={gradient} color={color}/>} />
          <Route path="/ShoppingCart" element={<ShoppingCart setUser={setUser} gradient={gradient} color={color} />} />
          <Route path="/RatingsRV" element={<RatingsRV setUser={setUser} gradient={gradient} color={color} />} />
          <Route path="/Payroll" element={<Payroll setUser={setUser} gradient={gradient} color={color} />} />
          <Route path="/ShowRV" element={<ShowRV setUser={setUser} gradient={gradient} color={color}/>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;