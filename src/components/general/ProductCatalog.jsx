import ProductCard from "./ProductCard"
import productsTemp from "../../data(temp)/productsTemp.json"
import { useState, useEffect } from "react";

const ProductCatalog = () => {

  const [products, setProducts] = useState([]);
  useEffect(()=>{
    setProducts(productsTemp);
    },[])


  

 
  return (
    <article className="fixed flex justify-between top-0 right-0 w-10/12 px-8 h-screen overflow-y-auto">
        <section className="flex flex-col ">
            <section className="flex mb-16">
                {
                    products.map(product=>(
                        <ProductCard key={product.id} info={product} />
                    ))
                }
                
            </section>

        </section>
    </article>
  )
}

export default ProductCatalog