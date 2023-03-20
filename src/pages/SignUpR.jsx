import LateralMenuClient from "../components/client_user/LateralMenuClient";
import LateralMenuRV from "../components/salesRepresentative_user/LateralMenuRV";
import LateralMenuMaster from "../components/salesRepresentative_user/LateralMenuMaster";
import SignUpRV from "../components/salesRepresentative_user/SignUpRV"

const SignUpR = ({setUser, gradient, color}) => {
  return (
    <>
        <div className="relative h-screen">
            {sessionStorage.getItem('user') == "cliente" ? 
                <LateralMenuClient setUser={setUser} gradient={gradient} color={color}/> 
            :   <LateralMenuMaster setUser={setUser} gradient={gradient} color={color}/> }
            
            <div className="w-10/12 fixed right-0 h-full overflow-y-auto">
              <SignUpRV/>
            </div> 
        </div>    
        </>
  )
}

export default SignUpR