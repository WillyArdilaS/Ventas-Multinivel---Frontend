import Graphics from '../components/salesRepresentative_user/Graphics'
import LateralMenu from '../components/general/LateralMenu'

const Statistics = ({setUser, gradient, color}) => {
  return (
    <>
        <div className="relative h-screen">
            <LateralMenu setUser={setUser} gradient={gradient} color={color}/>  
            <Graphics/>
        </div>
    </>
  )
}

export default Statistics