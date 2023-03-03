import {useState, useEffect} from 'react';
import React from 'react';
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const options = {
    indexAxis: 'x',
    elements:{
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins:{
        legend:{
            position: 'left',
        },
        title: {
            display: true,
            text: 'Age graph',
        },
    },
};

function BarChart() {
    const [data, setData] = useState({
      labels: [],
      datasets:[
        {
            label:'Dataset 1',
            data:[],
            borderColor: 'rgb(255,99,132)',
            backgroundColor: 'rgba(255,99,132,0.5)',
        },
        ],
      });

    useEffect(() => {
      const fetchData = async () => {
        const age = [];
        const name = [];
        try {
          const url = await fetch('http://localhost:5000/data/');
          const jsnData = await url.json();
          for (const val of jsnData){
            age.push(val.age);
            name.push(val.name);
          }
          setData({
            labels: name,
            datasets:[
              {
                  label:'Dataset 1',
                  data:age,
                  borderColor: 'rgb(255,99,132)',
                  backgroundColor: 'rgba(255,99,132,0.5)',
              },
              ],
            })
          //setData(jsnData);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);
    //console.log(Ttldata);
    
  return (
    <div style={{width:'80%', height:'50%'}}>
      <Bar data={data} options={options}/>
    </div>
  )
}

export default BarChart
