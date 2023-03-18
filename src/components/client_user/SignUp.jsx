import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({gradient, color2}) => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const navigate = useNavigate();

    const handleCreateUser = () => {
        console.log("Registro funcionando");
    }

    const handleChangePage = () => {
        navigate("LogIn");
    }

    return (
        <main className="container flex justify-center mx-auto mt-24">
            <article id="userRegister" className={`w-11/12 2xl:w-1/4 xl:w-2/5 lg:w-1/2 md:w-3/5 sm:w-3/4 absolute rounded-t-2xl rounded-b-xl bg-gradient-to-b ` + gradient}>
                <img src="https://res.cloudinary.com/dn1k0drir/image/upload/v1679111733/NatAmE/Logo_oeniv6.png" alt="Logo de la app" id="appLogo" width="350" height="250" className="mx-auto mt-4"/>
                
                <form action="" id="userRegister-form" className="mt-6">
                    <div className="w-4/5 flex justify-between mx-auto">
                        <div id="form-name">
                            <label htmlFor="name"></label>
                            <input type="text" name="name" id="name" placeholder="Nombre" className="w-32 lg:w-44 sm:w-44 mb-6 px-3 py-2 rounded-md bg-white text-gray-slate 
                            font-medium placeholder-slate-500" onChange={(e) => setName(e.target.value)} required/>
                        </div>

                        <div id="form-lastName">
                            <label htmlFor="lastName"></label>
                            <input type="text" name="lastName" id="lastName" placeholder="Apellido" className="w-32 lg:w-44 sm:w-44 mb-6 px-3 py-2 rounded-md bg-white 
                            text-slate-800 font-medium placeholder-slate-500" onChange={(e) => setLastName(e.target.value)} required/>
                        </div>
                    </div>

                    <div id="form-username" className="flex justify-center">
                        <label htmlFor="username"></label>
                        <input type="text" name="username" id="username" placeholder="Nombre de usuario" className="w-4/5 mb-6 px-3 py-2 rounded-md bg-white text-slate-800 
                        font-medium placeholder-slate-500" onChange={(e) => setUsername(e.target.value)} required/>
                    </div>

                    <div id="form-email" className="flex justify-center">
                        <label htmlFor="email"></label>
                        <input type="email" name="email" id="email" placeholder="Correo electrónico" className="w-4/5 mb-6 px-3 py-2 rounded-md bg-white text-slate-800 
                        font-medium placeholder-slate-500" onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                
                    <div id="form-password" className="flex justify-center">
                        <label htmlFor="password"></label>
                        <input type="password" name="password" id="password" placeholder="Contraseña" className="w-4/5 mb-6 px-3 py-2 rounded-md bg-white text-slate-800 
                        font-medium placeholder-slate-500" onChange={(e) => setPassword(e.target.value)} required/>
                    </div>

                    <div id="form-confirmPassword" className="flex justify-center">
                        <label htmlFor="confirmPassword"></label>
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirmar contraseña" className="w-4/5 px-3 py-2 rounded-md bg-white 
                        text-slate-800 font-medium placeholder-slate-500" onChange={(e) => setPasswordConfirmation(e.target.value)} required/>
                    </div>

                    <section className="flex pb-10 mx-16 mt-16">
                        <div id="form-signUp" className="flex justify-center content-center w-1/2">
                            <input type="button" id="button-signUp" value="Crear cuenta" onClick={handleCreateUser}
                            className={`px-5 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white shadow-lg text-${color2} text-sm font-semibold font-title 
                            hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}/>
                        </div>

                        <div id="form-signIn" className="flex justify-center content-center w-1/2">
                            <input type="button" id="button-signIn" value="Iniciar Sesión" onClick={handleChangePage} 
                            className={`px-5 py-3 border-white border-x-2 border-y-2 border-dashed rounded-lg bg-${color2} shadow-lg text-white text-sm font-semibold font-title
                            hover:cursor-pointer hover:bg-white hover:text-${color2} transition-colors`}/>
                        </div>
                    </section>
                </form>
            </article>
        </main>
    )
}

export default SignUp