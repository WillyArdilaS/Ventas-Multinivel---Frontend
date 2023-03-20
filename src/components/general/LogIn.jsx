import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = ({gradient, color}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    const handleLogin = () => {
        navigate("/Home");
    }

    return (
        <main className="container flex justify-center mx-auto mt-40">
            <article id="userSign" className={`w-3/5 2xl:w-1/5 xl:w-1/4 lg:w-1/3 md:w-2/5 sm:w-1/2 absolute rounded-t-2xl shadow-xl rounded-b-xl bg-gradient-to-b ` + gradient}>
                <img src="https://res.cloudinary.com/dn1k0drir/image/upload/v1679111733/NatAmE/Logo_oeniv6.png" alt="Logo de la app" id="appLogo" width="350" height="250" 
                className="mx-auto mt-8"/>

                <form action="" id="userSignIn-form" className="mt-6">
                    <div id="form-username" className="flex justify-center">
                        <label htmlFor="username"></label>
                        <input type="text" name="username" id="username" placeholder="Nombre de usuario" value={username} required
                            className="w-3/4 mb-6 px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400" 
                            onChange={(e) => setUsername(e.target.value)}/>
                    </div>

                    <div id="form-password" className="flex justify-center">
                        <label htmlFor="password"></label>
                        <input type="password" name="password" id="password" placeholder="Contraseña" value={password} required
                            className="w-3/4 px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400" 
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <section className="flex justify-center pb-8 mx-10 mt-24">
                        <input type="button" id="button-signIn" value="Iniciar sesión" onClick={handleLogin}
                        className={`w-1/2 px-4 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white shadow-lg text-${color} text-sm font-semibold font-title 
                        hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}/>
                    </section>
                </form>
            </article>
        </main>
    )
}

export default LogIn;