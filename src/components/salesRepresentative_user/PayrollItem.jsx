import { useEffect, useState } from "react";

const PayrollItem = ({ payroll }) => {
    const [arrowState, setArrowState] = useState();
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        if(payroll.CARGO == "BEGINNER")  {
            setPercentage(5);
        } else if(payroll.CARGO == "JUNIOR") {
            setPercentage(10);
        } else if(payroll.CARGO == "SENIOR") {
            setPercentage(15);
        } else if(payroll.CARGO == "MASTER") {
            setPercentage(20);
        }

        if(payroll.ESTADO == "SUBE") {
            setArrowState(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="darkGreen" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg>);
        } else if(payroll.ESTADO == "BAJA") {
            setArrowState(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="red" className="w-7 h-7 -scale-y-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg>);
        } else {
            setArrowState(<div className="flex items-center w-7 h-7 text-black text-3xl text-center font-bold"> = </div>);
        }
    }, []);

    return (
        <tr className="border-b-2 border-yellow text-black text-base font-semibold font-paragraph">
            <td className="px-6 py-3 text-left">
                {payroll.NOMBRE + " " + payroll.APELLIDO}
            </td>
            <td className="p-3 text-center">
                {payroll.CARGO.toLowerCase()}
            </td>
            <td className="p-3 text-center">
                {percentage}%
            </td>
            <td className="p-3 text-center">
                {payroll.NUM_VENTAS}
            </td>
            <td className="p-3 text-center">
                {payroll.CALIFICACION}
            </td>
            <td className="p-3 text-center">
                ${payroll.COMISION_TOTAL}
            </td>
            <td className="flex justify-center p-3 text-center">
                {arrowState}
            </td>
        </tr>
    )
}

export default PayrollItem