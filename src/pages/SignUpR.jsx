import LateralMenu from "../components/general/LateralMenu";
import SignUpRV from "../components/salesRepresentative_user/SignUpRV"

const SignUpR = ({setUsernameSS, gradient, color}) => {
  return (
    <>
        <div className="relative h-screen">
            <LateralMenu setUsernameSS={setUsernameSS} gradient={gradient} color={color}/>  
            
            <div className="w-10/12 fixed right-0 h-full overflow-y-auto">
              <SignUpRV/>
            </div> 
        </div>    
        </>
  )
}

export default SignUpR