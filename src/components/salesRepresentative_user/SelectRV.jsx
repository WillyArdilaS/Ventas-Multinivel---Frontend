import { useState } from "react";
import { useNavigate } from "react-router-dom";


const InfoCard = () => {
    const [saleRepresentative, setSaleRepresentative] = useState("");

    const navigate = useNavigate();

    const goToRVInfo = () => {
        navigate("/ShowRV");
    }

    return (
        <main className="container flex justify-center mx-auto mt-20">
            <article id="infoCard" className="w-1/3 py-8 absolute rounded-2xl bg-gradient-to-b from-lightBlue to-darkBlue">    
                <div id="form-selectRV" className="w-4/5 flex justify-between mx-auto">
                    <label htmlFor="selectRV"></label>
                    <select name="selectRV" id="selectRV" value={saleRepresentative} className="w-full mb-6 px-3 py-2 rounded-md bg-white shadow-md text-black 
                    font-medium font-title placeholder-slate-400" onChange={(e) => setSaleRepresentative(e.target.value)} required>
                        <option value="" disabled hidden> Seleccionar representante </option>
                        <option value="Representante 1">Representante 1</option>
                        <option value="Representante 1">Representante 2</option>
                    </select>
                </div> 

                <div className="w-4/5 flex justify-between mx-auto">
                    <div id="infoCard-name" className="flex w-full justify-between mb-6 px-4 py-2 rounded-md bg-white shadow-md font-medium font-title">
                        <h1 className="text-slate-400"> Nombre Completo </h1>
                        <h1 className="text-black"> William Ardila </h1>
                    </div>   
                </div>
                
                <div className="w-4/5 flex justify-between mx-auto">
                    <div id="infoCard-typePosition" className="flex w-full justify-between mb-6 px-4 py-2 rounded-md bg-white shadow-md font-medium font-title">
                        <h1 className="text-slate-400"> Categoría </h1>
                        <h1 className="text-black "> Junior </h1>
                    </div>   
                </div>
                
                <div className="w-4/5 flex justify-between mx-auto">
                    <div id="infoCard-region" className="flex w-full justify-between mb-6 px-4 py-2 rounded-md bg-white shadow-md font-medium font-title">
                        <h1 className="text-slate-400"> Region </h1>
                        <h1 className="text-black "> Region 1 </h1>
                    </div>   
                </div>

                <section className="flex justify-evenly mt-2">
                    <input type="button" id="button-changeRV" value="Confirmar cambio"
                    className={`flex justify-center w-1/3 px-5 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white shadow-lg text-darkBlue text-sm font-semibold 
                    font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}/>
                    
                    <input type="button" id="button-changeRV" value="Cancelar" onClick={goToRVInfo}
                    className={`flex justify-center w-1/3 px-5 py-3 border-white border-x-2 border-y-2 border-dashed rounded-lg bg-darkBlue shadow-lg text-white text-sm 
                    font-semibold font-title hover:cursor-pointer hover:bg-white hover:text-darkBlue transition-colors`}/>
                </section>
            </article>
        </main>
    )
}

export default InfoCard