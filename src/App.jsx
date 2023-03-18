import SelectUser from "./components/general/SelectUser";
import Login from "./components/general/LogIn";
import SignUp from "./components/client_user/SignUp";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = useState("cliente");
  const [gradient, setGradient] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");

  useEffect(() => {
    if(user == "cliente") {
      setGradient("from-lightGreen to-darkGreen")
      setColor1("lightGreen");
      setColor2("darkGreen"); 
    } else {
      setGradient("from-lightBlue to-darkBlue")
      setColor1("lightBlue");
      setColor2("darkBlue"); 
    }
    

  }, [user])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<SelectUser setUser={setUser} />} />
        <Route path="/LogIn" element={<Login gradient={gradient} color2={color2} />} />
        <Route path="/SignUp" element={<SignUp gradient={gradient} color2={color2} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
