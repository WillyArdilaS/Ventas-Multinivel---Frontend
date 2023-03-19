import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SelectUser from "./pages/SelectUser";
import Login from "./components/general/LogIn";
import SignUpRV from "./components/salesRepresentative_user/SignUpRV";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState("cliente");
  const [gradient, setGradient] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    if(user == "cliente") {
      setGradient("from-lightGreen to-darkGreen")
      setColor("darkGreen"); 
    } else {
      setGradient("from-lightBlue to-darkBlue")
      setColor("darkBlue"); 
    }
    

  }, [user])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<SelectUser setUser={setUser} />} />
        <Route path="/LogIn" element={<Login gradient={gradient} color={color} />} />
        <Route path="/SignUp" element={<SignUpRV gradient={gradient} color={color} />} />
        <Route path="/Home" element={<Home gradient={gradient} color={color} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
