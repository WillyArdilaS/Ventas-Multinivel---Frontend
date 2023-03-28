import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
import { useEffect,useState } from 'react';
import axios from "axios";

const PieGraphic = ({ period, typeStatistic }) => {

  const [labels, setLabels] = useState([]);
  const [sales, setSales] = useState([]);
  const basis = 'http://localhost:8080/estadisticas/'
  let url = basis.concat(typeStatistic,'/',period)

  useEffect(() => {
      (typeStatistic=='topRegiones'?makeRequest('REGION','VENTAS'):makeRequest('PRODUCTO','VENDIDO'))
  }, [])
  
  function makeRequest(atribute1,atribute2){
    axios.get(url)
      .then((res) => {
        res.data.map(item => {
          setLabels(element =>[...element,item[atribute1]]);
          setSales(element =>[...element,item[atribute2]]);
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  function title() {
    return (typeStatistic == 'topRegiones' ? `Regionales con más ventas en el periodo ${period}` : `Productos más vendido en el periodo ${period}`)
  }

  const options = {
    plugins: {
      title: {
        display: true,
        text: title(),
      },
    },
  };

 
  const data = {
    datasets: [{
      data: sales,
      backgroundColor: [
        'yellow',
        'red',
        'darkBlue',
        'darkGreen',
        'purple'
      ],
      label: "Ventas"
    }],

    labels: labels
  };

  return (
    <div className='w-2/5'>
      <Pie data={data} options={options} />
    </div>
  )
}

export default PieGraphic;
