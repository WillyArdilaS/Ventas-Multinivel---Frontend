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
import ChangeRV from "./pages/ChangeRV";
import Statistics from "./pages/Statistics";

function App() {
  const [usernameSS, setUsernameSS] = useState("");
  const [gradient, setGradient] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    const savedUser = sessionStorage.getItem("user");
    setUsernameSS(savedUser);
  }, []);

  useEffect(() => {
    if(sessionStorage.getItem("role") == "CLIENTE") {
      setGradient("from-lightGreen to-darkGreen")
      setColor("darkGreen"); 
    } else if(sessionStorage.getItem("role") == "REPRESENTANTE") {
      setGradient("from-lightBlue to-darkBlue")
      setColor("darkBlue"); 
    } else if(sessionStorage.getItem("role") == "REPRESENTANTE MASTER") {
      setGradient("from-lightBlue to-darkBlue")
      setColor("darkBlue"); 
    } 
    
  }, [usernameSS]);

  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/*" element={<Login setUsernameSS={setUsernameSS}/>} />
          <Route path="/LogIn" element={<Login setUsernameSS={setUsernameSS}/>} />
          <Route path="/Home" element={<Home setUsernameSS={setUsernameSS} gradient={gradient} color={color} />} />
          <Route path="/SignUpClient" element={<SignUpC setUsernameSS={setUsernameSS} gradient={gradient} color={color}/>} />
          <Route path="/SignUpRV" element={<SignUpR setUsernameSS={setUsernameSS} gradient={gradient} color={color}/>} />
          <Route path="/ShoppingCart" element={<ShoppingCart setUsernameSS={setUsernameSS} gradient={gradient} color={color} />} />
          <Route path="/RatingsRV" element={<RatingsRV setUsernameSS={setUsernameSS} gradient={gradient} color={color} />} />
          <Route path="/Payroll" element={<Payroll setUsernameSS={setUsernameSS} gradient={gradient} color={color} />} />
          <Route path="/ShowRV" element={<ShowRV setUsernameSS={setUsernameSS} gradient={gradient} color={color}/>} />
          <Route path="/ChangeRV" element={<ChangeRV setUsernameSS={setUsernameSS} gradient={gradient} color={color}/>} />
          <Route path="/Statistics" element={<Statistics setUsernameSS={setUsernameSS} gradient={gradient} color={color} />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;