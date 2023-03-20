import { useNavigate } from "react-router-dom";

const LateralMenuMaster = ({setUser, gradient, color}) => {
    const navigate = useNavigate();

    const handleSeeProducts = () => {
        navigate("/Home");
    }

    const handleSignUpClient = () => {
        navigate("/SignUpClient");
    }

    const handleSignUpRV = () => {
        navigate("/SignUpRV");
    }

    const handleLogOut = () => {
        setUser("");
        sessionStorage.setItem("user", "");
        navigate("/");
    }

    return (
        <article className={`fixed w-1/6 top-0 left-0 h-full bg-gradient-to-b ` + gradient}>
            <img src="https://res.cloudinary.com/dn1k0drir/image/upload/v1679111733/NatAmE/Logo_oeniv6.png" alt="Logo de la app" id="appLogo" width="250" height="200" 
            className="mx-auto"/>

            <h1 className="text-center text-white text-lg font-medium font-subtitle"> Laura Ramírez - Master </h1>

            <section className="flex flex-col justify-around items-center h-3/5 mt-4">
                <button id="button-signIn" value="Iniciar sesión" className={`flex items-center w-3/5 px-4 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white 
                shadow-lg text-${color} text-sm font-semibold font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}
                onClick={handleSeeProducts}> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 
                    002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 
                    2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 
                    6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 
                    1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/></svg>
                    <span className="ml-2"> Productos </span> 
                </button>

                <button id="button-signIn" value="Iniciar sesión" className={`flex items-center w-3/5 px-4 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white 
                shadow-lg text-${color} text-sm font-semibold font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 
                    00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 
                    0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/></svg>
                    <span className="ml-2"> Calificaciones </span> 
                </button>

                <button id="button-signIn" value="Iniciar sesión" className={`flex items-center w-3/5 px-4 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white 
                shadow-lg text-${color} text-sm font-semibold font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 
                    0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" /></svg>
                    <span className="ml-2"> Estadísticas </span> 
                </button>

                <button id="button-signIn" value="Iniciar sesión" className={`flex items-center w-3/5 px-4 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white 
                shadow-lg text-${color} text-sm font-semibold font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 
                    0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 
                    .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 
                    10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"/></svg>
                    <span className="ml-2"> Nómina </span> 
                </button>

                <button id="button-signIn" value="Iniciar sesión" className={`flex items-center w-3/5 px-4 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white 
                shadow-lg text-${color} text-sm font-semibold font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}
                onClick={handleSignUpClient}> 
                    <svg className="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" fill="none" strokeLinecap="round" 
                    strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="9" cy="7" r="4" />  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />  
                    <path d="M16 11l2 2l4 -4" /></svg>
                    <span className="ml-2"> Registrar cliente </span> 
                </button>

                <button id="button-signIn" value="Iniciar sesión" className={`flex items-center w-3/5 px-4 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white 
                shadow-lg text-${color} text-sm font-semibold font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}
                onClick={handleSignUpRV}> 
                    <svg className="h-6 w-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 
                    20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 
                    2 0 11-4 0 2 2 0 014 0z"/></svg>
                    <span className="ml-2"> Registrar RV </span> 
                </button>
            </section>

            <section className="flex flex-col justify-around items-center mt-16">
                <button id="button-signIn" value="Iniciar sesión" className={`flex items-center w-3/5 px-4 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white 
                shadow-lg text-${color} text-sm font-semibold font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}
                onClick={handleLogOut}> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 
                    2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"/></svg>  
                    <span className="ml-2"> Cerrar sesión </span> 
                </button>
            </section>
        </article>
    )
}

export default LateralMenuMaster