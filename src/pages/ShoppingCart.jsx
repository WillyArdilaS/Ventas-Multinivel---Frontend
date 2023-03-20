import LateralMenuClient from "../components/client_user/LateralMenuClient";
import ShoppingCartContainer from "../components/client_user/ShoppingCartContainer";

const ShoppingCart = ({setUser, gradient, color}) => {
  return (
    <>
        <div className="relative h-screen">
            <LateralMenuClient setUser={setUser} gradient={gradient} color={color}/> 
            <ShoppingCartContainer/>
        </div>
    </>
  )
}

export default ShoppingCart