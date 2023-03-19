import ProductCard from "./ProductCard"

const ProductCatalog = () => {
  return (
    <div className="relative ">
        <div className="fixed flex justify-between top-14 right-10 w-3/4 h-screen overflow-y-auto">
            <div className="flex flex-col">
                <div className="flex mb-16">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>

                <div className="flex mb-16">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>

                <div className="flex mb-16">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCatalog