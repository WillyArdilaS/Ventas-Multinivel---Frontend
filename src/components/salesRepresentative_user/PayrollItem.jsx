import { useEffect, useState } from "react";

const PayrollItem = ({ payroll }) => {
    const [arrowState, setArrowState] = useState();

    useEffect(() => {
        if(payroll.estado == "sube") {
            setArrowState(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="darkGreen" class="w-7 h-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg>);
        } else if(payroll.estado == "baja") {
            setArrowState(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="red" class="w-7 h-7 -scale-y-100">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg>);
        } else {
            setArrowState(<div className="flex items-center w-7 h-7 text-black text-3xl text-center font-bold"> = </div>);
        }
    }, []);

    return (
        <tr className="border-b-2 border-yellow text-black text-center text-base font-semibold font-paragraph">
            <td className="py-3">
                {payroll.nombreRepresentante}
            </td>
            <td className="py-3">
                {payroll.categoria}
            </td>
            <td className="py-3">
                {payroll.porcentajeComision}%
            </td>
            <td className="py-3">
                {payroll.ventas}
            </td>
            <td className="py-3">
                {payroll.calificaciones}
            </td>
            <td className="py-3">
                ${payroll.comisionTotal}
            </td>
            <td className="flex justify-center py-3">
                {arrowState}
            </td>
        </tr>
    )
}

export default PayrollItem