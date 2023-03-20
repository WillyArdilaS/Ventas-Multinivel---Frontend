import ProductCard from "./ProductCard"

const ProductCatalog = () => {
  return (
    <article className="fixed w-10/12 h-screen top-24 right-0 px-12 overflow-y-auto">
        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 h-fit mt-24 pb-6"> 
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </section>
    </article> 
  )
}

export default ProductCatalog