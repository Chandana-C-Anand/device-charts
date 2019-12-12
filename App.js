import React, { Component } from 'react'
import ApolloClient from 'apollo-boost';
import {gql} from 'apollo-boost';
import DBTable from './components/DBTable';
import Barchart from './components/Barchart';
import Chart_Insert from './components/Chart_Insert';

import './App.css';

export default class App extends Component {
  constructor() {
      super()
      this.DBquery = this.DBquery.bind(this);
      this.state = {
          repos: [],
          chartdata:[]
      }
  }

  componentDidMount() {
    this.DBquery();
    setInterval(this.DBquery, 5000); // runs every 5 seconds.
  }

  async DBquery(){
    const client = new ApolloClient ({uri : 'https://azure-lora-api.azurewebsites.net/graphql?code=7aFl/fgJ3Iq0tXK8lqQbccX62yh91ETs0NvEoxscLgc/SC6WOWg3hA==',});
      try {
        let result = await client.query({
          query: gql`
            {
              getDeviceUplingData(dev_eui:"d9ad826ed6e99f58",limit:10){
                received_at
                 dev_eui
                 device_name
                 sensor_code
                 data{
                   time
                   temp
                   GX
                   GY
                   GX
                   AX
                   AY
                   AZ
                 }
               }
                         }`
          })
          this.setState({
            repos: result.data.getDeviceUplingData,
            chartdata: result.data.getDeviceUplingData,
          })
          console.log(this.state.repos);
          console.log(this.state.repos[0].data);
          console.log(this.state.repos[4].data.time);
          console.log('lets check data inside chartdata');
          console.table(this.state.chartdata[0].data);
                } catch(err) {
        console.error(err);
      }
    }

  render() {
    return (
    <div class="main">
     
            <div class="half"><Chart_Insert chartvalue={this.state.chartdata}  title={"Time"}
            color="#70CAD1"/></div>
            <div class="half"><Barchart chartvalue={this.state.chartdata}  title={"Time"}
            color="#70CAD1"/></div>
             <div class="half2"><DBTable rows={this.state.repos}/></div>
      
    </div>
        )
  }
}