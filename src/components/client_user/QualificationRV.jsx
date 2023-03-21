
const QualificationRV = () => {

  const card_one = document.querySelector(".card-1");
  const card_two = document.querySelector(".card-2");
  const btn_select = document.querySelectorAll(".btn-select");
  const score = document.querySelector(".score");

  var number_select = 1;

 
  function activeButton(event) {
    btn_select.forEach((btn) => {
      btn.classList.remove("active");
    });
    if (event.target.classList.contains("btn-select")) {
      event.target.classList.add("active");
    }
    number_select = event.target.textContent;
  }


  function showCardTwo() {
    card_one.classList.add("hidden");
    score.textContent = number_select;
    card_two.classList.remove("hidden");
  }
  return (
    <div className="container">
      <div className="card-1">
        <div className="image">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
         </svg>
        <div className='image2'>
          <img src="https://res.cloudinary.com/dn1k0drir/image/upload/v1679111733/NatAmE/Logo_oeniv6.png" alt="Logo de la app" id="appLogo" width="350" height="250" 
          className="mx-auto mt-8"/>
        </div>
        </div>
        <div className="title">How did we do?</div>
        <div className="text">
         
        </div>
        <div className="buttons-numbers">
          <button className="btn-select active" onClick={activeButton}>1</button>
          <button className="btn-select" onClick={activeButton}>2</button>
          <button className="btn-select" onClick={activeButton}>3</button>
          <button className="btn-select" onClick={activeButton}>4</button>
          <button className="btn-select" onClick={activeButton}>5</button>
        </div>
        <button className="btn" onClick={showCardTwo}>SUBMIT</button>
      </div>

      <div className="card-2 hidden">
        <div className="image2">
          <img src="https://res.cloudinary.com/dn1k0drir/image/upload/v1679111733/NatAmE/Logo_oeniv6.png" alt="Logo de la app" id="appLogo" width="350" height="250" 
          className="mx-auto mt-8"/>
        </div>
        <div className="numberSelect">
          You selected <span className="score"> </span> out of 5
        </div>
        <div className="title2">Thank you!</div>
        <div className="textThanku">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </div>
      </div>
    </div>
  )
}

export default QualificationRV