import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";

const InfoCard = () => {

    const [completeName, setCompleteName] = useState("");
    
    const [type, setType] = useState("");
    const [region, setRegion] = useState("");

    const navigate = useNavigate();

    const goToChangeRV = () => {
        navigate("/ChangeRV");
    }

    

    useEffect(() => {
        axios.get(`http://localhost:8080/cliente/representante/809993423/CC`)
        .then((res) => {
            console.log(res.data.id.kTipoId)
            console.log(res.data.id.kNumeroId)
            const name = res.data.nombreCompleto+' '+res.data.apellidoCompleto
            setCompleteName(name)
            setType(res.data.tipo)
            setRegion(res.data.region)
            sessionStorage.setItem("region",res.data.region)
            sessionStorage.setItem("tipo",res.data.tipo)
            sessionStorage.setItem("tipoIdRV",res.data.id.kTipoId)
            sessionStorage.setItem("numeroIdRV",res.data.id.kNumeroId)
        })
        .catch((err) => {
          console.log(err)
        })
    }, [])
    

    return (
        <main className="container flex justify-center mx-auto mt-28">
            <article id="infoCard" className="w-2/5 2xl:w-1/3 py-8 absolute rounded-2xl bg-gradient-to-b from-lightBlue to-darkBlue">     
                <div className="w-4/5 flex justify-between mx-auto">
                    <div id="infoCard-name" className="flex w-full justify-between mb-6 px-4 py-2 rounded-md bg-white shadow-md font-medium font-title">
                        <h1 className="text-slate-400"> Nombre Completo </h1>
                        <h1 className="text-black">{completeName} </h1>
                    </div>   
                </div>
                
                <div className="w-4/5 flex justify-between mx-auto">
                    <div id="infoCard-typePosition" className="flex w-full justify-between mb-6 px-4 py-2 rounded-md bg-white shadow-md font-medium font-title">
                        <h1 className="text-slate-400"> Categoría </h1>
                        <h1 className="text-black "> {type} </h1>
                    </div>   
                </div>
                
                <div className="w-4/5 flex justify-between mx-auto">
                    <div id="infoCard-region" className="flex w-full justify-between mb-6 px-4 py-2 rounded-md bg-white shadow-md font-medium font-title">
                        <h1 className="text-slate-400"> Region </h1>
                        <h1 className="text-black "> {region} </h1>
                    </div>   
                </div>

                <section className="flex justify-center mt-2">
                    <input type="button" id="button-changeRV" value="Cambiar representante" onClick={goToChangeRV}
                    className={`flex justify-center w-1/2 px-5 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white shadow-lg text-darkBlue text-sm font-semibold 
                    font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}/>
                </section>
            </article>
        </main>
    )
}

export default InfoCard