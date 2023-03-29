import Graphics from '../components/salesRepresentative_user/Graphics'
import LateralMenu from '../components/general/LateralMenu'

const Statistics = ({setUsernameSS, gradient, color}) => {
  return (
    <>
        <div className="relative h-screen">
            <LateralMenu setUsernameSS={setUsernameSS} gradient={gradient} color={color}/>  
            <Graphics/>
        </div>
    </>
  )
}

export default Statistics