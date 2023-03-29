import LateralMenu from "../components/general/LateralMenu";
import PayrollContainer from "../components/salesRepresentative_user/PayrollContainer";

const Payroll = ({setIdNumber, gradient, color}) => {
  return (
    <>
        <div className="relative h-screen">
            <LateralMenu setIdNumber={setIdNumber} gradient={gradient} color={color}/>  
            <PayrollContainer/>
        </div>
    </>
  )
}

export default Payroll