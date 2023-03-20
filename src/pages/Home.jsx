import { useState } from "react";
import LateralMenuClient from "../components/client_user/LateralMenuClient";
import LateralMenuRV from "../components/salesRepresentative_user/LateralMenuRV";
import LateralMenuMaster from "../components/salesRepresentative_user/LateralMenuMaster";
import ProductCatalog from "../components/general/ProductCatalog";

const Home = ({setUser, gradient, color}) => {
    const [region, setRegion] = useState("");
    const [categorie, setCategorie] = useState("");
    const [subcategorie, setSubcategorie] = useState("");

    return (
        <>
            <div className="relative h-screen">
                <section className="fixed w-10/12 h-24 top-0 right-0 overflow-y-auto bg-yellow shadow-md"> 
                    <form action="" id="product-form">
                        <div className="flex justify-around items-center w-11/12 h-24 mx-auto">
                            <div id="form-region">
                                <label htmlFor="region"></label>
                                <select name="region" id="region" value={region} className="w-56 px-3 py-2 rounded-md bg-white shadow-md text-black 
                                font-medium font-title placeholder-slate-400" onChange={(e) => setRegion(e.target.value)} required>
                                    <option value="" disabled hidden> Región </option>
                                    <option value="regionA"> Región A </option>
                                    <option value="regionB"> Región B </option>
                                </select> 
                            </div>

                            <div id="form-categorie">
                                <label htmlFor="categorie"></label>
                                <select name="categorie" id="categorie" value={categorie} className="w-56 px-3 py-2 rounded-md bg-white shadow-md 
                                text-black font-medium font-title placeholder-slate-400" onChange={(e) => setCategorie(e.target.value)} required>
                                    <option value="" disabled hidden> Categoría </option>
                                    <option value="categorie1"> Categoría 1 </option>
                                    <option value="categorie2"> Categoría 2 </option>
                                </select> 
                            </div>

                            <div id="form-subcategorie">
                                <label htmlFor="subcategorie"></label>
                                <select name="subcategorie" id="subcategorie" value={subcategorie} className="w-56 px-3 py-2 rounded-md bg-white shadow-md 
                                text-black font-medium font-title placeholder-slate-400" onChange={(e) => setSubcategorie(e.target.value)} required>
                                    <option value="" disabled hidden> Subcategoría </option>
                                    <option value="subcategorie1"> Subcategoría 1 </option>  
                                    <option value="subcategorie2"> Subcategoría 2 </option>  
                                </select> 
                            </div>
                        </div>
                    </form>
                </section>

                {sessionStorage.getItem('user') == "cliente" ? 
                    <LateralMenuClient setUser={setUser} gradient={gradient} color={color}/> 
                :   <LateralMenuMaster setUser={setUser} gradient={gradient} color={color}/> }
                
                <ProductCatalog/>
            </div>    
        </>
    )
}

export default Home