import LateralMenu from "../components/general/LateralMenu";
import PayrollContainer from "../components/salesRepresentative_user/PayrollContainer";

const Payroll = ({setUser, gradient, color}) => {
  return (
    <>
        <div className="relative h-screen">
            <LateralMenu setUser={setUser} gradient={gradient} color={color}/>  
            <PayrollContainer/>
        </div>
    </>
  )
}

export default Payroll