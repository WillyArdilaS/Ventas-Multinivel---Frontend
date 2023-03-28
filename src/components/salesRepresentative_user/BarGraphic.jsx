import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);
import { useEffect ,useState} from 'react';
import axios from "axios";


  
const BarGraphic = ({period}) => {
  const [labels, setLabels] = useState([]);
  const [sales, setSales] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/estadisticas/topRepresentantes/${period}`)
      .then((res) => {
        console.log(res.data)
        res.data.map(item => {
          setLabels(element => [...element, item['Representante De Ventas']])
          setSales(element => [...element, Number(item['Producto Vendido'])])
        })
      })
      .catch((err) => {
        console.log(err)
      })
    

  }, [])
  
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Top n representantes',
      },
    },
  };
  
  
  const data = {
    datasets: [
      {
        label: '# de ventas',
        data: sales,
        backgroundColor: 'darkBlue',
      },
    ],
    labels,
  };

  return (
    <div className='w-2/4'>
        <Bar options={options} data={data} />
    </div>
  )
}

export default BarGraphic