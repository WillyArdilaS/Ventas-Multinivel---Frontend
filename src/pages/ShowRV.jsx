import LateralMenu from "../components/general/LateralMenu";
import InfoCard from "../components/salesRepresentative_user/InfoCard"
import SelectRV  from "../components/salesRepresentative_user/SelectRV"

const ShowRV = ({setUser, gradient, color}) => {
  return (
    <>
        <div className="relative h-screen">
            <LateralMenu setUser={setUser} gradient={gradient} color={color}/>  
            
            <div className="w-3/4 fixed right-32 h-full overflow-y-auto">
                <InfoCard/>
            </div> 
        </div>    
        </>
  )
}

export default ShowRV