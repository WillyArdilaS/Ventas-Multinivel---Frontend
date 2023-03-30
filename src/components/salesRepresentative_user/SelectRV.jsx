import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const InfoCard = () => {

    const navigate = useNavigate();

    const typeRV = ['BEGINNER', 'JUNIOR', 'SENIOR', 'MASTER'].filter(element => element != sessionStorage.getItem("cargoRV"))

    const [rvSelected, setRvSelected] = useState([]);
    const [name, setName] = useState("");
    const [type, setType] = useState("")
    const [region, setRegion] = useState("")
    const [idRV, setIdRV] = useState();
    const [idTypeRV, setIdTypeRV] = useState("")

    const URLONE = 'http://localhost:8080/representantes_por_region_rango/' + sessionStorage.getItem("regionRV") + '/' + sessionStorage.getItem("cargoRV")
    const URLTWO = 'http://localhost:8080/representantes_por_rango/' + sessionStorage.getItem("cargoRV")
    

    const goToRVInfo = () => {
        navigate("/ShowRV");
    }

    useEffect(() => {
        if (!getRV(URLONE)) {
            alert('En este momento no hay un Representante del mismo tipo y regional. \n Sin embargo podemos asignarte uno del mismo tipo (' + sessionStorage.getItem('cargoRV') + ')')
            getRV(URLTWO)
        }
    }, [])

    const showRVSelected = (e) => {
        const option = e.target.value
        setIdTypeRV(rvSelected[option].idType)
        setIdRV(rvSelected[option].id)
        setName(rvSelected[option].nameRV)
        setType(rvSelected[option].tipo)
        setRegion(rvSelected[option].region)
    }


    function getRV(url) {
        axios.get(url).
            then((res) => {
                res.data.map(item => {
                    const idType = item.id.kTipoId
                    const id = item.id.kNumeroId
                    const nameRV = item.nombreCompleto + ' ' + item.apellidoCompleto
                    const region = item.region
                    const tipo = item.tipo

                    if (sessionStorage.getItem("numeroIdRV") == id) {
                        item + 1
                    } else {
                        setRvSelected(element => [...element, { idType: idType, id: id, nameRV: nameRV, tipo: tipo, region: region }])
                        return (true)
                    }
                })

            }).catch(err => {
                console.log(err)
            })
        return (false)

    }

    const updateRV=()=>{
        
        axios.put('http://localhost:8080/cliente/cambioRV',{tipoIdCliente:sessionStorage.getItem("tipoID"),idCliente:sessionStorage.getItem("numeroID"),tipoIdRV:idTypeRV,idRV:idRV})
        .then(()=>{
            alert("Representante actualizado con éxito");
            navigate("/ShowRV");

        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <main className="container flex justify-center mx-auto mt-20">
            <article id="infoCard" className="w-2/5 2xl:w-1/3 py-8 absolute rounded-2xl bg-gradient-to-b from-lightBlue to-darkBlue">
                <div id="form-selectRV" className="w-4/5 flex justify-between mx-auto">
                    <label htmlFor="selectRV"></label>
                    <select name="selectRV" id="selectRV" className="w-full mb-6 px-3 py-2 rounded-md bg-white shadow-md text-black 
                    font-medium font-title placeholder-slate-400" onChange={showRVSelected} required>
                        <option value="" disabled hidden> Seleccionar representante </option>

                        {
                            rvSelected.map((item, index) => {
                                return (<option key={item.id} value={index} >{item.nameRV}</option>)
                            })
                        }

                    </select>
                </div>

                <div className="w-4/5 flex justify-between mx-auto">
                    <div id="infoCard-name" className="flex w-full justify-between mb-6 px-4 py-2 rounded-md bg-white shadow-md font-medium font-title">
                        <h1 className="text-slate-400"> Nombre Completo </h1>
                        <h1 className="text-black "> {name} </h1>
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

                <section className="flex justify-evenly mt-2">
                    <input type="button" id="button-changeRV" value="Confirmar cambio" onClick={updateRV}
                        className={`flex justify-center w-1/3 px-5 py-3 border-white border-x-2 border-y-2 rounded-lg bg-white shadow-lg text-darkBlue text-sm font-semibold 
                    font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`} />

                    <input type="button" id="button-changeRV" value="Cancelar" onClick={goToRVInfo}
                        className={`flex justify-center w-1/3 px-5 py-3 border-white border-x-2 border-y-2 border-dashed rounded-lg bg-darkBlue shadow-lg text-white text-sm 
                    font-semibold font-title hover:cursor-pointer hover:bg-white hover:text-darkBlue transition-colors`} />
                </section>
            </article>
        </main>
    )
}

export default InfoCard