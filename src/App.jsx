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
  const [idNumber, setIdNumber] = useState("");
  const [gradient, setGradient] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    const savedID = sessionStorage.getItem("numeroID");
    setIdNumber(savedID);
  }, []);

  useEffect(() => {
    if(sessionStorage.getItem("role") == "CLIENTE") {
      setGradient("from-lightGreen to-darkGreen")
      setColor("darkGreen"); 
    } else if(sessionStorage.getItem("role") == "REPRESENTANTE") {
      setGradient("from-lightBlue to-darkBlue")
      setColor("darkBlue"); 
    } else if(sessionStorage.getItem("role") == "MASTER") {
      setGradient("from-lightBlue to-darkBlue")
      setColor("darkBlue"); 
    } 
  }, [idNumber]);

  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/*" element={<Login setIdNumber={setIdNumber}/>} />
          <Route path="/LogIn" element={<Login setIdNumber={setIdNumber}/>} />
          <Route path="/Home" element={<Home setIdNumber={setIdNumber} gradient={gradient} color={color} />} />
          <Route path="/SignUpClient" element={<SignUpC setIdNumber={setIdNumber} gradient={gradient} color={color}/>} />
          <Route path="/SignUpRV" element={<SignUpR setIdNumber={setIdNumber} gradient={gradient} color={color}/>} />
          <Route path="/ShoppingCart" element={<ShoppingCart setIdNumber={setIdNumber} gradient={gradient} color={color} />} />
          <Route path="/RatingsRV" element={<RatingsRV setIdNumber={setIdNumber} gradient={gradient} color={color} />} />
          <Route path="/Payroll" element={<Payroll setIdNumber={setIdNumber} gradient={gradient} color={color} />} />
          <Route path="/ShowRV" element={<ShowRV setIdNumber={setIdNumber} gradient={gradient} color={color}/>} />
          <Route path="/ChangeRV" element={<ChangeRV setIdNumber={setIdNumber} gradient={gradient} color={color}/>} />
          <Route path="/Statistics" element={<Statistics setIdNumber={setIdNumber} gradient={gradient} color={color} />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;