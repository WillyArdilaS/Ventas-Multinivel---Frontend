import ProductCard from "./ProductCard"
import productsTemp from "../../data(temp)/productsTemp.json"
import { useState, useEffect } from "react";

const ProductCatalog = ({}) => {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    setProducts(productsTemp);
    },[])

  return (
    <article className="fixed w-10/12 h-screen top-24 right-0 px-12 overflow-y-auto">
        <section className="grid grid-cols-3  2xl:grid-cols-4 h-fit mt-24 pb-6">
            {
                products.map(product=>(
                    <ProductCard key={product.id} info={product} />
                ))
            }
        </section>
    </article>
  )
}

export default ProductCatalog