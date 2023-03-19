import ProductCard from "./ProductCard"

const ProductCatalog = () => {
  return (
    <article className="fixed flex justify-between top-0 right-0 w-10/12 px-8 h-screen overflow-y-auto">
        <section className="flex flex-col ">
            <section className="flex mb-16">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </section>

            <section className="flex mb-16">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </section>

            <section className="flex mb-16">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </section>
        </section>
    </article>
  )
}

export default ProductCatalog