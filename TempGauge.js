import React , {Component} from 'react';
import {Line ,Bar,Pie, Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js';

class TempGauge extends Component {
 
 
    constructor (props){
        super (props);
        console.log('props at Chart_insert');
        console.log(props);
        this.chartRef = React.createRef();
    }
 
    componentDidMount() {
      this.myChart = new Chart(this.chartRef.current, {
      })}

    componentDidUpdate() {
      this.myChart = new Chart(this.chartRef.current, {
        type: 'bar',
        data: {
          labels: this.props.chartvalue.map(d => d.data.time),
          datasets: [{
            label: 'Temperature',
            data: this.props.chartvalue.map(d => d.data.temp),
            backgroundColor: this.props.color,
            //fill: false,
            //lineTension : 4 ,
          },
          {
            label: 'Gyro X',
            data: this.props.chartvalue.map(d => d.data.GX),
            backgroundColor: "#FFCAD1",
            //fill: false,
            //lineTension : 0.5 ,
          },
          {
            label: 'Gyro Y',
            data: this.props.chartvalue.map(d => d.data.GY),
            backgroundColor: "#1db340",
            //fill: false,
            //lineTension : 0.5 ,
          },
          ]
        },
        options: {
          fill: false,
          animation: {
              duration: 0
          }
        },
      });
      console.log("received data:",this.props);
    }
  
  


  render () {
    return (

        <div class="container">
          
           <br></br>
           <RadialGauge
   units='°C'
   title='Temperature'
   value={this.data.time}
   minValue={0}
   maxValue={50}
   majorTicks={['0', '5', '15', '20', '25', '30', '35', '40', '45', '50']}
   minorTicks={2}
></RadialGauge>
           
                   
        <h4>Bar Graph for Temperature and Gyro data : </h4>

        <canvas ref={this.chartRef} />
           
   

    </div>

        )
}
}

export default  Chart_Insert ;