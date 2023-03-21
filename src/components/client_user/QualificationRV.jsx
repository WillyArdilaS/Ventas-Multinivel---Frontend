import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QualificationRV = ({gradient, color}) => {
  const [qualificationRV, setQualificationRV] = useState(0)
  const arrayQualifications = [1,2,3,4,5]
  const cardOne = Array.from(document.getElementsByClassName('card-1'));
  const cardTwo = Array.from(document.getElementsByClassName('card-2')) ;
  
  
  const activeButton=(e)=>{
    if (e.target.classList.contains("btn-select")) {
      e.target.classList.add("focus:bg-white","focus:text-black","focus:ring-2","focus:ring-lightBlue");
    }
    setQualificationRV(Number(e.target.textContent))
  }

  const showQualification=()=>{
    if(qualificationRV!=0){
      cardOne[0].classList.add('hidden');
      cardTwo[0].classList.remove('hidden')
    } else {
      alert("No has calificado a tu representante aún")
    }
    
  }

  const navigate = useNavigate();

    const goToHome=()=>{
        navigate("/Home");
    }

  return (
    <main className="container flex justify-center mx-auto mt-40">
    <article id="qualification" className={`w-11/12 2xl:w-1/4 xl:w-2/5 lg:w-1/2 md:w-3/5 sm:w-3/4 absolute rounded-t-2xl rounded-b-xl bg-gradient-to-b ` + gradient}>
      <section className="card-1">
        <div className=''>
          <img src="https://res.cloudinary.com/dn1k0drir/image/upload/v1679111733/NatAmE/Logo_oeniv6.png" alt="Logo de la app" id="appLogo" width="350" height="250" 
          className="mx-auto mt-8"/>
        </div>
        
        <div className="text-white font-title font-extrabold text-2xl p-6 text-center ">
          ¿Cómo lo hizo tu representante?
        </div>
        <div className="text-white font-subtitle font-normal text-sm p-2 text-center">
            Puedes darle una calificación al servicio brindado por tu 
            <br></br>representante de 1 a 5 
        </div>
        <div className="flex justify-around mt-4">
          {
            arrayQualifications.map(element=>
              <button className="btn-select w-12 h-12 rounded-full hover:bg-white hover:text-black hover:cursor-pointer bg-darkBlue text-white font-bold" onClick={activeButton}>{element}</button>
            )
          }
    
        </div>
        <section className="flex justify-center pb-8 mx-10 mt-16">
          <input type="button" id="button-qualification" value="Calificar" onClick={showQualification}
          className={`w-1/2 px-4 py-2 border-white border-x-2 border-y-2 rounded-lg bg-white shadow-lg text-${color} text-sm font-semibold font-title 
          hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}/>
        </section>
       
      </section>
          
      <section className="card-2 hidden">
        <div className="">
          <img src="https://res.cloudinary.com/dn1k0drir/image/upload/v1679111733/NatAmE/Logo_oeniv6.png" alt="Logo de la app" id="appLogo" width="350" height="250" 
          className="mx-auto mt-8"/>
        </div>
        <div className="mx-auto flex text-center items-center justify-center m-0 w-48 h-10 bg-white text-black text-sm font-paragraph font-bold border-2 border-double rounded-md border-lightBlue">
          Seleccionaste<span className='mx-1 font-bold text-darkBlue'>{qualificationRV}</span>de 5
        </div>
        <div className="text-center text-3xl font-bold text-white p-4 font-title ">¡Muchas gracias!</div>
        <div className="felx text-center text-white font-paragraph text-xs mb-6">
         Te agradecemos que te hayas tomado la molestia de puntuarnos. 
         <br></br>Si deseas realizar más compras oprime el botón.
        </div>

        <section className="flex justify-center pb-8 mx-10 mt-16">
          <input type="button" id="button-qualification" value="Volver a la página principal" onClick={goToHome}
          className={`w-1/2 px-4 py-2 border-white border-x-2 border-y-2 rounded-lg bg-white shadow-lg text-${color} text-sm font-semibold font-title 
          hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}/>
        </section>
      </section>

      
  

    
    </article>
    </main>
  )
}

export default QualificationRV