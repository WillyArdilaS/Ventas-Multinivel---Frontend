import { useEffect, useState } from 'react';
import RatingsRVItem from './RatingsRVItem';
import axios from 'axios';

const RatingsRVContainer = () => {
   const [ratings, setRatings] = useState([]);
   var idType = sessionStorage.getItem("tipoID");
   var idNumber = sessionStorage.getItem("numeroID");

   useEffect(()=>{
      setRatings([]);
      
      axios.get(`http://localhost:8080/calificaciones/${idType}/${idNumber}`)
      .then(res => {
         res.data.map(item => {
            setRatings(element => [...element, item]);
         })
      })
      .catch(err => {
         console.log(err)
      })
   },[]);

   if(ratings.length !== 0){
   return(
      <article className="fixed w-10/12 h-screen top-0 right-0 px-12 overflow-y-auto">
         <table className="w-10/12 mt-14 mx-auto overflow-x-auto">
               <thead>
                  <tr className="bg-yellow text-white text-lg font-title text-center">
                     <th className="w-1/6 min-w-[160px] px-3 py-4">
                        Nombre de cliente
                     </th>

                     <th className="w-1/6 min-w-[160px] px-3 py-4">
                        Calificación
                     </th>

                     <th className="w-1/6 min-w-[160px] px-3 py-4">
                        Fecha
                     </th>
                  </tr>
               </thead>

               <tbody>
                  {
                     ratings.map((rating, index) => <RatingsRVItem key={index} rating={rating} />)
                  }
               </tbody>
            </table>
      </article>
   )
  }

  return (
   <>
   <article className="fixed w-10/12 h-screen top-0 right-0 px-12 overflow-y-auto">
         <div className={`flex items-center justify-center mt-12 px-10 py-5 bg-yellow text-white text-lg font-medium font-subtitle rounded-md shadow-md`}
         role="alert">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 
            2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 
            0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 
            2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
            <p> No tienes ninguna calificación </p>
         </div>
   </article>
   </>
  )
}

export default RatingsRVContainer