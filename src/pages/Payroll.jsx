import LateralMenu from "../components/general/LateralMenu";
import PayrollContainer from "../components/salesRepresentative_user/PayrollContainer";

const Payroll = ({setUsernameSS, gradient, color}) => {
  return (
    <>
        <div className="relative h-screen">
            <LateralMenu setUsernameSS={setUsernameSS} gradient={gradient} color={color}/>  
            <PayrollContainer/>
        </div>
    </>
  )
}

export default Payroll