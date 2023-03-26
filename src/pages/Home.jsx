import { useEffect, useState } from "react";
import LateralMenu from "../components/general/LateralMenu";
import ProductCatalog from "../components/general/ProductCatalog";
import axios from "axios";

const Home = ({setUser, gradient, color}) => {
    const [region, setRegion] = useState("");
    const [regionList, setRegionList] = useState([])
    const [categorie, setCategorie] = useState("");
    const [categorieList, setCategorieList] = useState([]);
    const [subcategorie, setSubcategorie] = useState("");
    const [subcategorieList, setSubcategorieList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/regiones')
        .then((res) => {
            res.data.map(item => {
                setRegionList(element => [...element, item.nombreRegion]);
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }, []);

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
                                    {
                                        regionList.map((region, index) => {
                                            return(<option key={index} value={region}> {region} </option>);
                                        })
                                    }
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

                <LateralMenu setUser={setUser} gradient={gradient} color={color}/>
                <ProductCatalog/>
            </div>    
        </>
    )
}

export default Home