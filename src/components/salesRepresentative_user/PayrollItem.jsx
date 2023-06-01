import { useEffect, useState } from "react";

const PayrollItem = ({ payroll }) => {
    const [arrowState, setArrowState] = useState();
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        if(payroll.cargo == "BEGINNER")  {
            setPercentage(40);
        } else if(payroll.cargo == "JUNIOR") {
            setPercentage(60);
        } else if(payroll.cargo == "SENIOR") {
            setPercentage(80);
        } else if(payroll.cargo == "MASTER") {
            setPercentage(100);
        }

        if(payroll.estado == "SUBE") {
            setArrowState(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="darkGreen" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg>);
        } else if(payroll.estado == "BAJA") {
            setArrowState(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="red" className="w-7 h-7 -scale-y-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg>);
        } else {
            setArrowState(<div className="flex items-center w-7 h-7 text-black text-3xl text-center font-bold"> = </div>);
        }
    }, []);

    return (
        <tr className="border-b-2 border-yellow text-black text-base font-semibold font-paragraph">
            <td className="px-6 py-3 text-left">
                {payroll.nombre + " " + payroll.apellido}
            </td>
            <td className="p-3 text-center">
                {payroll.cargo.toLowerCase()}
            </td>
            <td className="p-3 text-center">
                {percentage}%
            </td>
            <td className="p-3 text-center">
                {payroll.numVentas}
            </td>
            <td className="p-3 text-center">
                {payroll.calificacion}
            </td>
            <td className="p-3 text-center">
                ${payroll.comision}
            </td>
            <td className="flex justify-center p-3 text-center">
                {arrowState}
            </td>
        </tr>
    )
}

export default PayrollItem