import { useEffect, useState } from "react";


const RatingsRVItem = ({ rating }) => {
    const [starList, setStarList] = useState([]);
    var ratingDate = new Date(rating.FECHA);

    useEffect(() => {
        var emptyStars = 5;

        for(var i=0; i<rating.CALIFICACION; i++) {
            setStarList(item => [...item, <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 
            00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 
            0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/></svg>]);
        }

        emptyStars -= rating.CALIFICACION;

        for(var i=0; i<emptyStars; i++) {
            setStarList(item => [...item, <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 
            00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 
            0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/></svg>]);
        }
    }, []);

    return (
        <tr className="border-b-2 border-yellow text-black text-center text-base font-semibold font-paragraph">
            <td className="py-3">
                {rating.CLIENTE}
            </td>
            <td className="flex justify-evenly py-3">
                {starList}
            </td>
            <td className="py-3">
                {ratingDate.toDateString().split(' ').slice(1).join(' ')}
            </td>
        </tr>
    )
}

export default RatingsRVItem;