import { useEffect, useState } from "react";
import axios from 'axios';

const SignUpRV = () => {
    const [idType, setIdType] = useState("");
    const [idNumber, setIdNumber] = useState();    
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [genre, setGenre] = useState("");
    const [birthDate, setBirthDate] = useState(Date);
    const [typePosition, setTypePosition] = useState("");
    const [address, setAddress] = useState("");
    const [contractDate, setContractDate] = useState(Date);
    const [regionList, setRegionList] = useState([]);
    const [region, setRegion] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();    
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    
    useEffect(() => {
        setRegionList([]);

        axios.get('http://localhost:8080/regiones')
        .then((res) => {
            res.data.map(item => {
                setRegionList(element => [...element, item]);
            })
        })
        .catch((err) => {
            console.log(err)
        });
    }, []);

    const handleCreateUser = () => {
        if(password == passwordConfirmation) {
            var today = new Date()
            today = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear();

            var birth = new Date(birthDate);
            birth = birth.getDate() + '/' + (birth.getMonth()+1) + '/' + birth.getFullYear();

            var contract = new Date(contractDate);
            contract = contract.getDate() + '/' + (contract.getMonth()+1) + '/' + contract.getFullYear();

            axios.post('http://localhost:8080/representante/save', {
                tipoId: idType, 
                numeroId: Number(idNumber),
                tipoIdJefe: sessionStorage.getItem("tipoID"),
                numeroIdJefe: Number(sessionStorage.getItem("numeroID")),
                nombreCompleto: name,
                apellidoCompleto: lastName,
                fechaCreacion: today, 
                email: email,
                telefono: Number(phoneNumber),
                region: region,
                genero: genre,
                password: password,
                fNacimiento: birth, 
                direccion: address,
                tipo: typePosition,
                fechaContrato: contract,
                username: username,
                estado: "ACTIVO"
            })
            .then(res => {
                alert("Representante creado con éxito");
            })
            .catch(err => {
                console.log(err)
            });
        } else {
            alert("Las contraseñas no coinciden")
        }
    }

    return (
        <main className="container flex justify-center mx-auto mt-12">
            <article id="userRegister" className="w-2/5 2xl:w-1/3 absolute rounded-2xl bg-gradient-to-b from-lightBlue to-darkBlue">
                <img src="https://res.cloudinary.com/dn1k0drir/image/upload/v1679111733/NatAmE/Logo_oeniv6.png" alt="Logo de la app" id="appLogo" width="350" height="250" 
                className="mx-auto mt-4"/>
                
                <form action="" id="userRegister-form" className="mt-6">
                    <div className="w-4/5 flex justify-between mx-auto">
                        <div id="form-idType">
                            <label htmlFor="idType"></label>
                            <select name="idType" id="idType" value={idType} className="w-32 lg:w-44 sm:w-44 mb-6 px-3 py-2 rounded-md bg-white shadow-md text-black 
                            font-medium font-title placeholder-slate-400" onChange={(e) => setIdType(e.target.value)} required>
                                <option value="" disabled hidden> Tipo ID </option>
                                <option value="CC">C.C</option>
                                <option value="TI">T.I</option>
                            </select> 
                        </div>

                        <div id="form-idNumber">
                            <label htmlFor="idNumber"></label>
                            <input type="text" name="idNumber" id="idNumber" value={idNumber} placeholder="Número ID" className="w-32 lg:w-44 sm:w-44 mb-6 px-3 py-2 
                            rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setIdNumber(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="w-4/5 flex justify-between mx-auto">
                        <div id="form-name">
                            <label htmlFor="name"></label>
                            <input type="text" name="name" id="name" value={name} placeholder="Nombre" className="w-32 lg:w-44 sm:w-44 mb-6 px-3 py-2 rounded-md bg-white 
                            shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setName(e.target.value)} required/>
                        </div>

                        <div id="form-lastName">
                            <label htmlFor="lastName"></label>
                            <input type="text" name="lastName" id="lastName" value={lastName} placeholder="Apellido" className="w-32 lg:w-44 sm:w-44 mb-6 px-3 py-2 rounded-md 
                            bg-white shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setLastName(e.target.value)} required/>
                        </div>
                    </div>

                    <div className="w-4/5 flex justify-between mx-auto">
                        <div id="form-genre" className="w-full">
                            <fieldset value={genre} className="flex justify-around mb-6 px-3 py-2 rounded-md bg-white shadow-md text-black font-medium font-title 
                            placeholder-slate-400" onChange={(e) => setGenre(e.target.value)} required>
                                <div className="flex">
                                    <label htmlFor="M" className="mr-2"> Hombre </label>
                                    <input type="radio" name="genre" id="male" value="M" />
                                </div>

                                <div  className="flex">
                                    <label htmlFor="F" className="mr-2"> Mujer </label>
                                    <input type="radio" name="genre" id="female" value="F"/>
                                </div>

                                <div  className="flex">
                                    <label htmlFor="O" className="mr-2"> Otro </label>
                                    <input type="radio" name="genre" id="other" value="O"/>
                                </div>
                            </fieldset>
                        </div>
                    </div>

                    <div className="w-4/5 flex justify-between mx-auto">
                        <div id="form-birthDate" className="flex w-full justify-between mb-6 px-3 py-2 rounded-md bg-white shadow-md text-slate-400 font-medium font-title 
                        placeholder-slate-400">
                            <h1> Fecha de nacimiento </h1>
                            
                            <label htmlFor="birthDate"></label>
                            <input type="date" name="birthDate" id="birthDate" value={birthDate} className="text-black" onChange={(e) => setBirthDate(e.target.value)} required/>
                        </div>   
                    </div>

                    <div className="w-4/5 flex justify-between mx-auto">
                        <div id="form-region">
                            <label htmlFor="region"></label>
                            <select name="region" id="region" value={region} className="w-32 lg:w-44 sm:w-44 mb-6 px-3 py-2 rounded-md bg-white shadow-md text-black 
                            font-medium font-title placeholder-slate-400" onChange={(e) => setRegion(e.target.value)} required>
                                <option value="" disabled hidden> Región </option>
                                {
                                    regionList.map((region, index) => {
                                        return(<option key={index} value={region.nombreRegion}> {region.nombreRegion} </option>);
                                    })
                                }
                            </select>
                        </div>

                        <div id="form-phoneNumber">
                            <label htmlFor="phoneNumber"></label>
                            <input type="text" name="phoneNumber" id="phoneNumber" value={phoneNumber} placeholder="Número de Teléfono" className="w-32 lg:w-44 sm:w-44 mb-6 px-3 
                            py-2 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400" 
                            onChange={(e) => setPhoneNumber(e.target.value)} required/>
                        </div>
                    </div>

                    <div id="form-address" className="flex justify-center">
                        <label htmlFor="address"></label>
                        <input type="text" name="address" id="address" value={address} placeholder="Dirección" className="w-4/5 mb-6 px-3 py-2 rounded-md 
                        bg-white shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setAddress(e.target.value)} required/>
                    </div>
                    
                    
                    <div className="w-4/5 flex justify-between mx-auto">    
                        <div id="form-typePosition" className="w-full">
                            <label htmlFor="typePosition"></label>
                            <fieldset value={typePosition} className="flex justify-around mb-6 px-3 py-2 bg-white shadow-md rounded-md  
                                    text-black font-medium font-title placeholder-slate-400" onChange={(e) => setTypePosition(e.target.value)} required>
                                <div className="flex">
                                    <label htmlFor="BEGINNER" className="mr-2">Beginner</label>
                                    <input type="radio" name="typePosition" id="begginer" value="BEGGINER" />
                                </div>

                                <div className="flex">
                                    <label htmlFor="JUNIOR" className="mr-2">Junior</label>
                                    <input type="radio" name="typePosition" id="junior" value="JUNIOR" />
                                </div>
                                <div className="flex">
                                    <label htmlFor="SENIOR" className="mr-2">Senior</label>
                                    <input type="radio" name="typePosition" id="senior" value="SENIOR"/>
                                </div>
                                <div className="flex">
                                    <label htmlFor="MASTER" className="mr-2">Master</label>
                                    <input type="radio" name="typePosition" id="master" value="MASTER"/>
                                </div>
                            </fieldset>
                        </div>
                    </div>

                    <div className="w-4/5 flex justify-between mx-auto">
                        <div id="form-contractDate" className="flex w-full justify-between mb-6 px-3 py-2 rounded-md bg-white shadow-md text-slate-400 font-medium font-title 
                        placeholder-slate-400">
                            <h1> Fecha de contrato </h1>

                            <label htmlFor="contractDate"></label>
                            <input type="date" name="contractDate" id="contractDate" value={contractDate} className="ml-12 text-black" 
                            onChange={(e) => setContractDate(e.target.value)} required/>
                        </div>   
                    </div>

                    <div id="form-email" className="flex justify-center">
                        <label htmlFor="email"></label>
                        <input type="email" name="email" id="email" value={email} placeholder="Correo electrónico" className="w-4/5 mb-6 px-3 py-2 rounded-md bg-white 
                        shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setEmail(e.target.value)} required/>
                    </div>

                    <div id="form-username" className="flex justify-center">
                        <label htmlFor="username"></label>
                        <input type="text" name="username" id="username" value={username} placeholder="Nombre de usuario" className="w-4/5 mb-6 px-3 py-2 rounded-md bg-white 
                        shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setUsername(e.target.value)} required/>
                    </div>
                
                    <div id="form-password" className="flex justify-center">
                        <label htmlFor="password"></label>
                        <input type="password" name="password" id="password" value={password} placeholder="Contraseña" className="w-4/5 mb-6 px-3 py-2 rounded-md 
                        bg-white shadow-md text-black font-medium font-title placeholder-slate-400" onChange={(e) => setPassword(e.target.value)} required/>
                    </div>

                    <div id="form-confirmPassword" className="flex justify-center">
                        <label htmlFor="confirmPassword"></label>
                        <input type="password" name="confirmPassword" id="confirmPassword" value={passwordConfirmation} placeholder="Confirmar contraseña" className="w-4/5 px-3 
                        py-2 rounded-md bg-white shadow-md text-black font-medium font-title placeholder-slate-400" 
                        onChange={(e) => setPasswordConfirmation(e.target.value)} required/>
                    </div>

                    <section className="flex justify-center pb-6 mt-12">
                        <input type="button" id="button-signUp" value="Crear cuenta" onClick={handleCreateUser}
                        className={`flex justify-center w-1/3 px-5 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white shadow-lg text-darkBlue text-sm font-semibold 
                        font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}/>
                    </section>
                </form>
            </article>
        </main>
    )
}

export default SignUpRV