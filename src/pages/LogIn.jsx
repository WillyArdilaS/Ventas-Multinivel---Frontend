import { useState } from "react";
import axios from 'axios';
import ModalPassword from "../components/general/ModalPassword";

const LogIn = ({setIdNumber}) => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const handleLogin = () => {
        if(name.length > 0 && password.length > 0) {
            axios.post('http://localhost:8080/api/auth/database_login', null, {params:{nombre:name, apellido:lastName, password: password}})
            .then(res => {
                if("codeError" in res.data) {
                    if(res.data.codeError == 28001) {
                        setModalOpen(true);
                    } else {
                        alert("Error: " + res.data.codeError + "\n" + res.data.message);
                    }
                } else {
                    const role = res.data["role 0"]
                    console.log(res.data["role 0"]);
     
                    if(role == "R_CLIENTE") {
                        sessionStorage.setItem("role", "CLIENTE");
                        sessionStorage.setItem("nombreCompleto", "U_CLIENTE")
                    } else if(role == "R_REPRESENTANTE") {
                        sessionStorage.setItem("role", "REPRESENTANTE");
                        sessionStorage.setItem("nombreCompleto", "U_REPRESENTANTE")
                    } else {
                        sessionStorage.setItem("role", "MASTER");
                        sessionStorage.setItem("nombreCompleto", "U_MASTER")
                    }

                    if(lastName != "") {
                        axios.post('http://localhost:8080/api/auth/getUsuario', null, {params:{username:(name + "_" + lastName)}})
                        .then(response => {
                            setIdNumber(response.data.id.numeroId);
                            sessionStorage.setItem("nombreCompleto", (response.data.nombreCompleto + " " + response.data.apellidoCompleto));
                            sessionStorage.setItem("tipoID", response.data.id.tipoId);
                            sessionStorage.setItem("numeroID", response.data.id.numeroId);
    
                            alert("Conexion creada");
                            window.location.href = "/Home";
                        })
                        .catch(err => {
                            console.log(err)
                        });   
                    } else {
                        alert("Conexion creada");
                        window.location.href = "/Home";
                    }
                }
            })
            .catch(err => {
                console.log(err);  
            })
        } else {
            alert("Por favor complete todos los campos");
        }
    }

    return (
       <main className="container flex justify-center mx-auto mt-28 2xl:mt-36">
            <article id="userSign" className={`w-3/5 2xl:w-1/5 xl:w-1/4 lg:w-1/3 md:w-2/5 sm:w-1/2 absolute rounded-t-2xl shadow-xl rounded-b-xl bg-gradient-to-b 
            from-lightGreen to-darkGreen `}>
                <img src="https://res.cloudinary.com/dn1k0drir/image/upload/v1679111733/NatAmE/Logo_oeniv6.png" alt="Logo de la app" id="appLogo" width="350" height="250" 
                className="mx-auto mt-8"/>

                <form id="userSignIn-form" className="mt-6">
                    <div id="form-name" className="flex justify-center">
                        <label htmlFor="name"></label>
                        <input type="text" name="name" id="name" placeholder="Nombre completo" value={name} required
                            className="w-3/4 mb-6 px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400" 
                            onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div id="form-lastName" className="flex justify-center">
                        <label htmlFor="lastName"></label>
                        <input type="text" name="lastName" id="lastName" placeholder="Apellido completo" value={lastName} required
                            className="w-3/4 mb-6 px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400" 
                            onChange={(e) => setLastName(e.target.value)}/>
                    </div>

                    <div id="form-password" className="flex justify-center">
                        <label htmlFor="password"></label>
                        <input type="password" name="password" id="password" placeholder="Contraseña" value={password} required
                            className="w-3/4 px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400" 
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <section className="flex justify-center pb-10 mx-10 mt-16">
                        <input type="button" id="button-signIn" value="Iniciar sesión" onClick={handleLogin}
                        className={`w-1/2 px-4 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white shadow-lg text-darkGreen text-sm font-semibold font-title 
                        hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}/>
                    </section>
                </form>
            </article> 

            {modalOpen && <ModalPassword setModalOpen={setModalOpen} name={name} lastName={lastName}/>}
        </main>
    )
}

export default LogIn;