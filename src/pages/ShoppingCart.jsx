import LateralMenu from "../components/general/LateralMenu";
import ShoppingCartContainer from "../components/general/ShoppingCartContainer";

const ShoppingCart = ({setIdNumber, gradient, color}) => {
  return (
    <>
        <div className="relative h-screen">
            <LateralMenu setIdNumber={setIdNumber} gradient={gradient} color={color}/>  
            <ShoppingCartContainer/>
        </div>
    </>
  )
}

export default ShoppingCart