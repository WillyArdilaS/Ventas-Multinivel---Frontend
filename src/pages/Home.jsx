import { useEffect, useState } from "react";
import LateralMenu from "../components/general/LateralMenu";
import ProductCatalog from "../components/general/ProductCatalog";
import axios from "axios";

const Home = ({setUsernameSS, gradient, color}) => {
    const [regionList, setRegionList] = useState([]);
    const [regionName, setRegionName] = useState("");
    const [regionID, setRegionID] = useState(0);
    const [categorieList, setCategorieList] = useState([]);
    const [categorieName, setCategorieName] = useState("");
    const [categorieID, setCategorieID] = useState(0)
    const [subcategorieList, setSubcategorieList] = useState([]);
    const [subcategorie, setSubcategorie] = useState("");

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

    useEffect(() => {
        if(regionName.length > 0) {
            setCategorieList([]);

            axios.get(`http://localhost:8080/categorias/${regionID}`)
            .then((res) => {
                res.data.map(item => {
                    setCategorieList(element => [...element, item]);
                })
            })
            .catch((err) => {
                console.log(err)
            });
        }
    }, [regionName]);

    useEffect(() => {
        if(categorieName.length > 0) {
            setSubcategorieList([]);

            axios.get(`http://localhost:8080/subcategorias/${categorieID}`)
            .then((res) => {
                res.data.map(item => {
                    setSubcategorieList(element => [...element, item]);
                })
            })
            .catch((err) => {
                console.log(err)
            });
        }
    }, [categorieName]);

    const selectRegion = (e) => {
        setRegionName(e);
        regionList.map(region => {
            if(region.nombreRegion == e) {
                setRegionID(region.idRegion);
            }
        })
    }

    const selectCategorie = (e) => {
        setCategorieName(e);
        categorieList.map(categorie => {
            if(categorie.nombreCategoria == e) {
                setCategorieID(categorie.id);
                
            }
        })
    }

    return (
        <>
            <div className="relative h-screen">
                <section className="fixed w-10/12 h-24 top-0 right-0 overflow-y-auto bg-yellow shadow-md"> 
                    <form action="" id="product-form">
                        <div className="flex justify-around items-center w-11/12 h-24 mx-auto">
                            <div id="form-region">
                                <label htmlFor="region"></label>
                                <select name="region" id="region" value={regionName} className="w-56 px-3 py-2 rounded-md bg-white shadow-md text-black 
                                font-medium font-title" onChange={e => selectRegion(e.target.value)} required>
                                    <option value="" disabled hidden> Región </option>
                                    {
                                        regionList.map((region, index) => {
                                            return(<option key={index} value={region.nombreRegion}> {region.nombreRegion} </option>);
                                        })
                                    }
                                </select> 
                            </div>

                            <div id="form-categorie">
                                <label htmlFor="categorie"></label>
                                <select name="categorie" id="categorie" value={categorieName} className="w-56 px-3 py-2 rounded-md bg-white shadow-md 
                                text-black font-medium font-title" onChange={(e) => selectCategorie(e.target.value)} required>
                                    <option value="" disabled hidden> Categoría </option>
                                    {
                                        categorieList.map((categorie, index) => {
                                            return(<option key={index} value={categorie.nombreCategoria}> {categorie.nombreCategoria} </option>);
                                        })
                                    }
                                </select> 
                            </div>

                            <div id="form-subcategorie">
                                <label htmlFor="subcategorie"></label>
                                <select name="subcategorie" id="subcategorie" value={subcategorie} className="w-56 px-3 py-2 rounded-md bg-white shadow-md 
                                text-black font-medium font-title" onChange={(e) => setSubcategorie(e.target.value)} required>
                                    <option value="" disabled hidden> Subcategoría </option>
                                    {
                                        subcategorieList.map((subcategorie, index) => {
                                            return(<option key={index} value={subcategorie.nNombre}> {subcategorie.nNombre} </option>);
                                        })
                                    }
                                </select> 
                            </div>
                        </div>
                    </form>
                </section>

                <LateralMenu setUsernameSS={setUsernameSS} gradient={gradient} color={color}/>
                <ProductCatalog/>
            </div>    
        </>
    )
}

export default Home