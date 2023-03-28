import BarGraphic from "./BarGraphic"
import PieGraphic from "./PieGraphic"
import { useState, useEffect } from "react";
import axios from "axios";

const Graphics = () => {
  const [typeStatistic, setTypeStatistic] = useState("");
  const [period, setPeriod] = useState("");
  const [periodList, setPeriodList] = useState([]);

  
  useEffect(() => {
    axios.get('http://localhost:8080/periodos')
      .then((res) => {
        res.data.map(item => {
          setPeriodList(element => [...element, item.id]);
        })
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])

  const ShowGraphic = () => {
    if (typeStatistic != '' && period != '') {
      return (typeStatistic == 'representantes' ? <BarGraphic period={period} /> : <PieGraphic period={period} typeStatistic={typeStatistic} />)
    } else {
      return (
        <article className="fixed w-10/12 h-screen top-40 right-0 px-12 overflow-y-auto">
          <div className={`flex items-center justify-center mt-12 px-10 py-5 bg-yellow text-white text-lg font-medium font-subtitle rounded-md shadow-md`}
            role="alert">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 
            2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 
            0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 
            2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
            <p>Por favor selecciona un tipo de estadística y el periodo </p>
          </div>
        </article>
      )
    }
  }
  return (
    <>
      <section id="form-configuration" className="fixed flex justify-evenly w-10/12 pt-5 top-0 right-0 bg-yellow">
        <div className="flex justify-evenly mx-5">
          <label htmlFor="statistics"></label>
          <select name="typeStatistic" id="typeStatistic" value={typeStatistic} className="w-2/3 lg:w-60 sm:w-44 mb-6 px-3 py-2 rounded-md bg-white shadow-md text-black 
            font-medium font-title placeholder-slate-400" onChange={(e) => setTypeStatistic(e.target.value)} required>
            <option value="" disabled hidden> Tipo estadística </option>
            <option value="representantes"> Top n representantes </option>
            <option value="topRegiones">Regionales con más ventas</option>
            <option value="topProductos">Producto más vendido</option>
          </select>
        </div>

        <div className="flex justify-evenly mx-5">
          <label htmlFor="period"></label>
          <select name="period" id="period" value={period} className="w-2/3 lg:w-60 sm:w-44 mb-6 px-3 py-2 rounded-md bg-white shadow-md text-black 
            font-medium font-title placeholder-slate-400" onChange={(e) => setPeriod(e.target.value)} required>
            <option value="" disabled hidden> Periodo </option>
            {
              periodList.map((period) => {
                return (<option key={period} value={period}>{period}</option>)
              })
            }

          </select>
        </div>
      </section>

      <section id="graphic" className="fixed w-10/12 h-screen top-0 right-0 flex justify-center mt-40">
        <ShowGraphic></ShowGraphic>
      </section>
    </>
  )
}

export default Graphics