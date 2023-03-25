import LateralMenu from "../components/general/LateralMenu";
import RatingsRVContainer from "../components/salesRepresentative_user/RatingsRVContainer";

const RatingsRV = ({setUser, gradient, color}) => {
  return (
    <>
        <div className="relative h-screen">
            <LateralMenu setUser={setUser} gradient={gradient} color={color}/>  
            <RatingsRVContainer/>
        </div>
    </>
  )
}

export default RatingsRV