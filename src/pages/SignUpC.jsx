import LateralMenu from "../components/general/LateralMenu";
import SignUpClient from "../components/client_user/SignUpClient"

const SignUpC = ({setUser, gradient, color}) => {
  return (
    <>
        <div className="relative h-screen">
            <LateralMenu setUser={setUser} gradient={gradient} color={color}/>  
            
            <div className="w-10/12 fixed right-0 h-full overflow-y-auto">
              <SignUpClient/>
            </div>
        </div>    
        </>
  )
}

export default SignUpC