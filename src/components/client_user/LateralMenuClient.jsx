import { useNavigate } from 'react-router-dom';
const LateralMenu = ({gradient, color}) => {
    const navigate = useNavigate()
    const goToCart=()=>{
        navigate("/ShoppingCart");
    }

    const goToCatalog=()=>{
        navigate("/Home");
    }
    return (
        <article className={`fixed w-1/6 top-0 left-0 h-full bg-gradient-to-b ` + gradient}>
            <img src="https://res.cloudinary.com/dn1k0drir/image/upload/v1679111733/NatAmE/Logo_oeniv6.png" alt="Logo de la app" id="appLogo" width="250" height="200" 
            className="mx-auto"/>

            <h1 className="text-center text-white text-lg font-medium font-subtitle"> Laura Ramírez - Cliente </h1>

            <section className="flex flex-col justify-around items-center h-2/5 mt-12">
                <button id="button-signIn" value="Iniciar sesión" className={`flex items-center w-3/5 px-4 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white 
                shadow-lg text-${color} text-sm font-semibold font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`} onClick={goToCatalog}> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 
                    002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 
                    2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 
                    6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 
                    1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/></svg>
                    <span className="ml-2"> Productos </span> 
                </button>

                <button id="button-shoppingCart" value="Iniciar sesión" className={`flex items-center w-3/5 px-4 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white 
                shadow-lg text-${color} text-sm font-semibold font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`} onClick={goToCart} > 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 
                    3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 
                    011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/></svg>
                   
                    <span className="ml-2"> Ver carrito </span> 
                </button>

                <button id="button-signIn" value="Iniciar sesión" className={`flex items-center w-3/5 px-4 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white 
                shadow-lg text-${color} text-sm font-semibold font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 
                    1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 
                    01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 
                    01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 
                    0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 
                    01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 
                    1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    <span className="ml-2"> Cambiar RV </span> 
                </button>   
            </section>

            <section className="flex flex-col justify-around items-center mt-52">
                <button id="button-signIn" value="Iniciar sesión" className={`flex items-center w-3/5 px-4 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white 
                shadow-lg text-${color} text-sm font-semibold font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 
                    2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"/></svg>  
                    <span className="ml-2"> Cerrar sesión </span> 
                </button>
            </section>
        </article>
    )
}

export default LateralMenu