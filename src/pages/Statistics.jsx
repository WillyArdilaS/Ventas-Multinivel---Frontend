import Graphics from '../components/salesRepresentative_user/Graphics'
import LateralMenu from '../components/general/LateralMenu'

const Statistics = ({setIdNumber, gradient, color}) => {
  return (
    <>
        <div className="relative h-screen">
            <LateralMenu setIdNumber={setIdNumber} gradient={gradient} color={color}/>  
            <Graphics/>
        </div>
    </>
  )
}

export default Statistics