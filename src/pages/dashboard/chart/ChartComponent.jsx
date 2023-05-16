import React, { Component } from "react";
import ReactApexChart from 'react-apexcharts';

class ChartComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30]
      }],
      options: {
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function (chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },
        // colors: colors,
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: [
            ['John', 'Doe'],
            ['Joe', 'Smith'],
            ['Jake', 'Williams'],
            'Amber',
            ['Peter', 'Brown'],
            ['Mary', 'Evans'],
            ['David', 'Wilson'],
            ['Lily', 'Roberts'],
          ],
          labels: {
            style: {
              // colors: colors,
              fontSize: '12px'
            }
          }
        }
      },


    };
  }

  render() {
    return (
      <section id='bar-chart'>
        <h1 className='title'>پر فروشترین محصولات</h1>
        <div className='chart' id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={450} />
        </div>
      </section>
    )
  }
}

export default ChartComponent;