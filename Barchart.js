import React , {Component} from 'react';
import {Line ,Bar,Pie, Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js';

class Chart_Insert extends Component {
 
 
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
          datasets: [
          {
            label: 'Accelometer X',
            data: this.props.chartvalue.map(d => d.data.AX),
            backgroundColor: "#12CAD1",
            //fill: false,
            lineTension : 5 ,
          },
          {
            label: 'Accelometer Y',
            data: this.props.chartvalue.map(d => d.data.AY),
            backgroundColor: "#cc7ede",
           // fill: false,
           // lineTension : 0.5 ,
          },
          {
            label: 'Accelometer Z',
            data: this.props.chartvalue.map(d => d.data.AZ),
            backgroundColor: "#cc7e10",
           // fill: false,
           // lineTension : 0.5 ,
          }]
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
           
                   
        <h4>Bar Graph for Accelerometer data : </h4>

        <canvas ref={this.chartRef} />
           
   

    </div>

        )
}
}

export default  Chart_Insert ;