const LateralMenu = ({gradient, color}) => {
    return (
        <article className={`fixed w-1/6 top-0 left-0 h-full bg-gradient-to-b ` + gradient}>
            <img src="https://res.cloudinary.com/dn1k0drir/image/upload/v1679111733/NatAmE/Logo_oeniv6.png" alt="Logo de la app" id="appLogo" width="250" height="200"
            className="mx-auto"/>

            <h1 className="text-center text-white text-lg font-medium font-subtitle"> Laura Ramírez - JR </h1>

            <section className="flex flex-col justify-around items-center h-2/5 mt-12">
                <button id="button-signIn" value="Iniciar sesión" className={`flex items-center w-3/5 px-4 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white 
                shadow-lg text-${color} text-sm font-semibold font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}> 
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
                    <svg className="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" fill="none" strokeLinecap="round" 
                    strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="9" cy="7" r="4" />  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />  
                    <path d="M16 11l2 2l4 -4" /></svg>
                    <span className="ml-2"> Registrar cliente </span> 
                </button>
            </section>

            <section className="flex flex-col justify-around items-center mt-52">
                <button id="button-signIn" value="Iniciar sesión" className={`flex items-center w-3/5 px-4 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white 
                shadow-lg text-${color} text-sm font-semibold font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 
                    2.25 0 002.25-2.25V15M12 9l-3 
                    3m0 0l3 3m-3-3h12.75"/></svg>  
                    <span className="ml-2"> Cerrar sesión </span> 
                </button>
            </section>
        </article>
    )
}

export default LateralMenu