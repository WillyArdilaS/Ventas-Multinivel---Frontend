import { useNavigate } from "react-router-dom";

const SelectUser = ({setUser}) => {
    const navigate = useNavigate();

    const handleEnterClient = () => {
        setUser("cliente")
        navigate("/LogIn");
    }

    const handleEnterSR = () => {
        setUser("representante")
        navigate("/LogIn");
    }

    return (
        <>
            <h1 className="mt-20 text-6xl text-center font-title font-semibold animate__animated animate__zoomIn">
                Bienvenido a <span className="text-darkGreen font-bold"> NatAmE </span>
            </h1>

            <h2 className="mt-8 text-3xl text-center font-subtitle font-medium animate__animated animate__zoomIn" >
                Elige con que rol quieres ingresar
            </h2>

            <div className="flex flex-col justify-center items-center mt-24">
                <div id="form-buttonSignIn" className="flex justify-center content-center w-1/2">
                    <input type="button" id="button-signIn" value="Cliente" onClick={handleEnterClient} 
                    className="w-96 h-20 px-5 py-3 border-darkGreen border-x-4 border-y-4 rounded-lg bg-darkGreen shadow-lg text-white text-xl font-bold font-title 
                    hover:cursor-pointer hover:bg-transparent hover:text-darkGreen transition-colors animate__animated animate__infinite animate__pulse"/>
                </div>

                <div id="form-buttonSignIn" className="flex justify-center content-center mt-12">
                    <input type="button" id="button-signIn" value="Representante de ventas" onClick={handleEnterSR}
                    className="w-96 h-20 px-5 py-3 border-darkBlue border-x-4 border-y-4 rounded-lg bg-darkBlue shadow-lg text-white text-lg font-bold font-title 
                    hover:cursor-pointer hover:bg-transparent hover:text-darkBlue transition-colors animate__animated animate__infinite animate__pulse"/>
                </div>
        
            </div>
        </>
    )
}

export default SelectUser