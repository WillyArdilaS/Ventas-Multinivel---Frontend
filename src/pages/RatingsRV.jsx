import LateralMenu from "../components/general/LateralMenu";
import RatingsRVContainer from "../components/salesRepresentative_user/RatingsRVContainer";

const RatingsRV = ({setIdNumber, gradient, color}) => {
  return (
    <>
        <div className="relative h-screen">
            <LateralMenu setIdNumber={setIdNumber} gradient={gradient} color={color}/>  
            <RatingsRVContainer/>
        </div>
    </>
  )
}

export default RatingsRV