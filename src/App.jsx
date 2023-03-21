import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartProvider from "./context/CartContext";
import QualificationRV from "./components/client_user/QualificationRV";
import Login from "./components/general/LogIn";
import SelectUser from "./pages/SelectUser";
import SignUpC from "./pages/SignUpC";
import SignUpR from "./pages/SignUpR";
import ShoppingCart from "./pages/ShoppingCart";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState("");
  const [gradient, setGradient] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    const savedUser = sessionStorage.getItem("user");
    setUser(savedUser);
  }, [])
  

  useEffect(() => {
    if(user == "cliente") {
      setGradient("from-lightGreen to-darkGreen")
      setColor("darkGreen"); 
    } else if(user == "representante") {
      setGradient("from-lightBlue to-darkBlue")
      setColor("darkBlue"); 
    }
  }, [user]);

  return (
    <BrowserRouter>
    <CartProvider>
      <Routes>
        <Route path="/*" element={<SelectUser setUser={setUser} />} />
        <Route path="/LogIn" element={<Login gradient={gradient} color={color} />} />
        <Route path="/SignUpClient" element={<SignUpC setUser={setUser} gradient={gradient} color={color}/>} />
        <Route path="/SignUpRV" element={<SignUpR setUser={setUser} gradient={gradient} color={color}/>} />
        <Route path="/ShoppingCart" element={<ShoppingCart setUser={setUser} gradient={gradient} color={color} />} />
        <Route path="/QualificationRV" element={<QualificationRV setUser={setUser} gradient={gradient} color={color} />} />
        <Route path="/Home" element={<Home setUser={setUser} gradient={gradient} color={color} />} />
      </Routes>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;
