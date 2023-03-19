import LateralMenu from "../components/salesRepresentative_user/LateralMenuRV";
import ProductCatalog from "../components/general/ProductCatalog";

const Home = ({gradient, color}) => {
    return (
        <>
            <LateralMenu gradient={gradient} color={color}/>
            <ProductCatalog/>
        </>
    )
}

export default Home