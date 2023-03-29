import LateralMenu from "../components/general/LateralMenu";
import ShoppingCartContainer from "../components/general/ShoppingCartContainer";

const ShoppingCart = ({setUsernameSS, gradient, color}) => {
  return (
    <>
        <div className="relative h-screen">
            <LateralMenu setUsernameSS={setUsernameSS} gradient={gradient} color={color}/>  
            <ShoppingCartContainer/>
        </div>
    </>
  )
}

export default ShoppingCart