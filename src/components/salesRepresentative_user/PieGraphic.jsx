import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const PieGraphic = ({period,typeStatistic}) => {
    
    function title(){
        return(typeStatistic=='regionales'? 'Regionales con más ventas': 'Producto más vendido')
      }

    const options = {
        plugins: {
          title: {
            display: true,
            text: title(),
          },
        },
    };
    
    const labels = ['Region 1','Region 2','Region 3']
    const data = {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor:[
                'lightBlue',
                'lightGreen',
                'black'
            ],
            label : "# de ventas:"
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
