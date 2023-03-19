import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({gradient, color}) => {
    const [idType, setIdType] = useState("");
    const [idNumber, setIdNumber] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [genre, setGenre] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const navigate = useNavigate();

    const handleCreateUser = () => {
        console.log("Registro funcionando");
    }

    return (
        <main className="container flex justify-center mx-auto mt-16">
            <article id="userRegister" className={`w-11/12 2xl:w-1/4 xl:w-2/5 lg:w-1/2 md:w-3/5 sm:w-3/4 absolute rounded-t-2xl rounded-b-xl bg-gradient-to-b ` + gradient}>
                <img src="https://res.cloudinary.com/dn1k0drir/image/upload/v1679111733/NatAmE/Logo_oeniv6.png" alt="Logo de la app" id="appLogo" width="350" height="250" 
                className="mx-auto mt-4"/>
                
                <form action="" id="userRegister-form" className="mt-6">
                    <div className="w-4/5 flex justify-between mx-auto">
                        <div id="form-idType">
                            <label htmlFor="idType"></label>
                            <select name="idType" id="idType" value={idType} className="w-32 lg:w-44 sm:w-44 mb-6 px-3 py-2 rounded-md bg-white shadow-md 
                             font-medium font-title" onChange={(e) => setIdType(e.target.value)} required>
                                <option value="" disabled hidden> Tipo ID </option>
                                <option value="CC"> C.C </option>
                                <option value="TI"> T.I </option>
                            </select>
                        </div>

                        <div id="form-idNumber">
                            <label htmlFor="idNumber"></label>
                            <input type="text" name="idNumber" id="idNumber" placeholder="Número ID" value={idNumber} className="w-32 lg:w-44 sm:w-44 mb-6 px-3 py-2 rounded-md 
                            bg-white shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setIdNumber(e.target.value)} required/>
                        </div>
                    </div>

                    <div className="w-4/5 flex justify-between mx-auto">
                        <div id="form-name">
                            <label htmlFor="name"></label>
                            <input type="text" name="name" id="name" placeholder="Nombre completo" value={name} className="w-32 lg:w-44 sm:w-44 mb-6 px-3 py-2 rounded-md 
                            bg-white shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setName(e.target.value)} required/>
                        </div>

                        <div id="form-lastName">
                            <label htmlFor="lastName"></label>
                            <input type="text" name="lastName" id="lastName" placeholder="Apellido completo" value={lastName} className="w-32 lg:w-44 sm:w-44 mb-6 px-3 py-2 
                            rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setLastName(e.target.value)} required/>
                        </div>
                    </div>

                    <div className="w-4/5 flex justify-between mx-auto">
                        <div id="form-genre" className="w-full">
                            <fieldset value={genre} className="flex justify-around mb-6 px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title 
                            placeholder-slate-400" onChange={(e) => setGenre(e.target.value)} required>
                                <div className="flex">
                                    <label htmlFor="male" className="mr-2"> Hombre </label>
                                    <input type="radio" name="genre" id="male" value="male" />
                                </div>

                                <div  className="flex">
                                    <label htmlFor="female" className="mr-2"> Mujer </label>
                                    <input type="radio" name="genre" id="female" value="female"/>
                                </div>

                                <div  className="flex">
                                    <label htmlFor="other" className="mr-2"> Otro </label>
                                    <input type="radio" name="genre" id="other" value="other"/>
                                </div>
                            </fieldset>
                            
                        </div>
                    </div>

                    <div className="w-4/5 flex justify-between mx-auto">
                        <div id="form-city">
                            <label htmlFor="city"></label>
                            <input type="text" name="city" id="city" placeholder="Ciudad" value={city} className="w-32 lg:w-44 sm:w-44 mb-6 px-3 py-2 rounded-md bg-white 
                            shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setCity(e.target.value)} required/>
                        </div>

                        <div id="form-address">
                            <label htmlFor="address"></label>
                            <input type="text" name="address" id="address" placeholder="Dirección" value={address} className="w-32 lg:w-44 sm:w-44 mb-6 px-3 py-2 rounded-md 
                            bg-white shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setAddress(e.target.value)} required/>
                        </div>
                    </div>

                    <div className="w-4/5 flex justify-between mx-auto">
                        <div id="form-birthDate" className="flex w-full mb-6 px-3 py-2 rounded-md bg-white shadow-md text-slate-400 font-medium font-title 
                        placeholder-slate-400">
                            <h1 name="birthDateLabel" id="birthDateLabel" > Fecha de nacimiento </h1>

                            <label htmlFor="birthDate"></label>
                            <input type="date" name="birthDate" id="birthDate" value={birthDate} className="ml-12 text-black" onChange={(e) => setBirthDate(e.target.value)} required/>
                        </div>   
                    </div>

                    <div id="form-phoneNumber" className="flex justify-center">
                        <label htmlFor="phoneNumber"></label>
                        <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Número de teléfono" value={phoneNumber} className="w-4/5 mb-6 px-3 py-2 rounded-md 
                        bg-white shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setPhoneNumber(e.target.value)} required/>
                    </div>

                    <div id="form-email" className="flex justify-center">
                        <label htmlFor="email"></label>
                        <input type="email" name="email" id="email" placeholder="Correo electrónico" value={email} className="w-4/5 mb-6 px-3 py-2 rounded-md bg-white 
                        shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                
                    <div id="form-password" className="flex justify-center">
                        <label htmlFor="password"></label>
                        <input type="password" name="password" id="password" placeholder="Contraseña" value={password} className="w-4/5 mb-6 px-3 py-2 rounded-md bg-white 
                        shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setPassword(e.target.value)} required/>
                    </div>

                    <div id="form-confirmPassword" className="flex justify-center">
                        <label htmlFor="confirmPassword"></label>
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirmar contraseña" value={passwordConfirmation} className="w-4/5 px-3 
                        py-2 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400" 
                        onChange={(e) => setPasswordConfirmation(e.target.value)} required/>
                    </div>

                    <section className="flex justify-center pb-6 mx-16 mt-12">
                        <input type="button" id="button-signUp" value="Crear cuenta" onClick={handleCreateUser}
                        className={`w-1/2 px-5 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white shadow-lg text-${color} text-sm font-semibold font-title 
                        hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}/>
                    </section>
                </form>
            </article>
        </main>
    )
}

export default SignUp