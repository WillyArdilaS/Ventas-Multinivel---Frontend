import LateralMenu from "../components/general/LateralMenu";
import ShoppingCartContainer from "../components/general/ShoppingCartContainer";

const ShoppingCart = ({setUser, gradient, color}) => {
  return (
    <>
        <div className="relative h-screen">
            <LateralMenu setUser={setUser} gradient={gradient} color={color}/>  
            <ShoppingCartContainer/>
        </div>
    </>
  )
}

export default ShoppingCart