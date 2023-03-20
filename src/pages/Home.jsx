import LateralMenu from "../components/client_user/LateralMenuClient";
import ProductCatalog from "../components/general/ProductCatalog";

const Home = ({gradient, color}) => {
    return (
        <>
            <div className="relative h-screen">
                <LateralMenu gradient={gradient} color={color}/>
                <ProductCatalog/>
            </div>
                
        </>
    )
}

export default Home