import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const RatingForm = () => {
  const [qualificationRV, setQualificationRV] = useState(0)
  const arrayQualifications = [1,2,3,4,5]
  const cardOne = Array.from(document.getElementsByClassName('card-1'));
  const cardTwo = Array.from(document.getElementsByClassName('card-2')) ;
  
  const {processEnd} = useCartContext();

  const activeButton=(e)=>{
    if (e.target.classList.contains("btn-select")) {
      e.target.classList.add("focus:bg-white","focus:text-black");
    }
    setQualificationRV(Number(e.target.textContent))
  }

  const showQualification=()=>{
    if(qualificationRV>=0){
      cardOne[0].classList.add('hidden');
      cardTwo[0].classList.remove('hidden')
    } 
  }

  const navigate = useNavigate();

    const goToHome=()=>{
      processEnd(qualificationRV)
      navigate("/Home");
    }

  return (
    <main className={`container flex justify-center mx-auto mt-40`}>
      <article id="qualification" className={`w-11/12 2xl:w-1/4 xl:w-2/5 lg:w-1/2 md:w-3/5 sm:w-3/4 absolute rounded-t-2xl rounded-b-xl bg-gradient-to-b
      from-lightGreen to-darkGreen`}>
        <section className="card-1">
          <div className=''>
            <img src="https://res.cloudinary.com/dn1k0drir/image/upload/v1679111733/NatAmE/Logo_oeniv6.png" alt="Logo de la app" id="appLogo" width="350" height="250" 
            className="mx-auto mt-2"/>
          </div>
          
          <div className="text-white font-title font-extrabold text-2xl pb-4 px-6 text-center ">
            ¿Cómo lo hizo tu representante?
          </div>
          <div className="text-white font-subtitle font-normal text-sm mx-8 text-center">
              Puedes darle una calificación al servicio brindado por tu representante de 0 a 5 
          </div>
          <div className="flex justify-around mt-8 px-6">
            {
              arrayQualifications.map(element=>
                <button key={element} className="btn-select w-12 h-12 bg-darkBlue text-white font-bold rounded-full hover:bg-white hover:text-darkBlue hover:cursor-pointer" 
                onClick={activeButton}>{element}</button>
              )
            }
      
          </div>
          <section className="flex justify-evenly pb-8 mx-6 mt-10">
            <input type="button" id="button-qualification" value="Calificar" onClick={showQualification}
            className={`w-2/5 px-2 py-2 border-white border-x-2 border-y-2 rounded-lg bg-white shadow-lg text-darkGreen text-sm font-semibold font-title 
            hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}/>

            <input type="button" id="button-qualification" value="No calificar" onClick={goToHome}
            className={`w-2/5 px-2 py-2 border-white border-x-2 border-y-2 border-dashed rounded-lg bg-transparent shadow-lg text-white text-sm font-semibold font-title 
            hover:cursor-pointer hover:bg-white hover:text-darkGreen transition-colors`}/>
          </section>
        </section>
            
        <section className="card-2 hidden">
          <div className="">
            <img src="https://res.cloudinary.com/dn1k0drir/image/upload/v1679111733/NatAmE/Logo_oeniv6.png" alt="Logo de la app" id="appLogo" width="350" height="250" 
            className="mx-auto mt-8"/>
          </div>
          <div className="mx-auto flex text-center items-center justify-center m-0 w-48 h-10 bg-white text-black text-sm font-paragraph font-bold rounded-md">
            Seleccionaste<span className='mx-1 font-bold text-darkBlue'>{qualificationRV}</span>de 5
          </div>
          <div className="text-center text-3xl font-bold text-white p-4 font-title ">¡Muchas gracias!</div>
          <div className="felx text-center text-white font-paragraph text-sm mx-8">
            Te agradecemos que te hayas tomado la molestia de puntuarnos. 
            <br></br><br></br>Si deseas realizar más compras oprime el botón.
          </div>

          <section className="flex justify-center pb-8 mx-10 mt-8">
            <input type="button" id="button-qualification" value="Cerrar encuesta" onClick={goToHome}
            className={`w-1/2 px-4 py-2 border-white border-x-2 border-y-2 rounded-lg bg-white shadow-lg text-darkGreen text-sm font-semibold font-title 
            hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}/>
          </section>
        </section>
      </article>
    </main>
  )
}

export default RatingForm