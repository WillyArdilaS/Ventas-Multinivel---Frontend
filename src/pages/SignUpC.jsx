import LateralMenuClient from "../components/client_user/LateralMenuClient";
import LateralMenuRV from "../components/salesRepresentative_user/LateralMenuRV";
import LateralMenuMaster from "../components/salesRepresentative_user/LateralMenuMaster";
import SignUpClient from "../components/client_user/SignUpClient"

const SignUpC = ({setUser, gradient, color}) => {
  return (
    <>
        <div className="relative h-screen">
            {sessionStorage.getItem('user') == "cliente" ? 
                <LateralMenuClient setUser={setUser} gradient={gradient} color={color}/> 
            :   <LateralMenuMaster setUser={setUser} gradient={gradient} color={color}/> }
            
            <div className="w-10/12 fixed right-0 h-full overflow-y-auto">
              <SignUpClient/>
            </div>
        </div>    
        </>
  )
}

export default SignUpC