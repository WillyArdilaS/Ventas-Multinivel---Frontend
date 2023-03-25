import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

  
const BarGraphic = ({period}) => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Top n representantes',
      },
    },
  };
  
  const labels = ['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7'];
  const data = {
    datasets: [
      {
        label: '# de ventas',
        data: [10,20,30,66,67,68,90],
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