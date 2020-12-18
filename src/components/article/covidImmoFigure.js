import React, {Component} from 'react';
import Chart from "chart.js";
import 'chartjs-plugin-annotation';

class LineGraphShort extends Component {
    chartRef = React.createRef();
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "bar",
            data: {
                //Bring in data
                labels: [
                         "2016 T1", "2016 T2", "2016 T3", "2016 T4",
                         "2017 T1", "2017 T2", "2017 T3", "2017 T4",
                         "2018 T1", "2018 T2", "2018 T3", "2018 T4",
                         "2019 T1", "2019 T2", "2019 T3", "2019 T4",
                         "2020 T1", "2020 T2", "2020 T3"
                ],
                datasets: [
                  {
                    fill: false,
                    borderColor: "#1DE9B6", 
                    label: "Réservations",
                    yAxisID: 'A',
                    data: [28661, 34082, 28317, 36109, 31700, 33489, 30108, 35397, 31083, 35403, 28254, 35180, 31791, 34943, 28932, 35216, 26014, 21142, 24308],
                    type: 'line'
                  }, 
                  {
                    fill: false,
                    borderColor: "#7D204C",
                    label: "Mise en vente",
                    yAxisID: 'A',
                    data: [28038, 38297, 27559, 33986, 31550, 38181, 25636, 31275, 34868, 38190, 26475, 28397, 26058, 34629, 25007, 26968, 20272, 19365, 18902],
                    type: 'line'
                  },
                  {
                    fill: true,
                    borderColor: "silver",
                    label: "Encours",
                    yAxisID: 'B',
                    data: [101119, 106238, 104562, 103743, 105034, 111331, 109024, 108273, 113576, 117815, 118040, 112825, 109425, 111617, 109586, 103848, 101020, 98267, 95238]
                  }
                ]
            },
            options: {
              scales: {
                xAxes: [{
                  gridLines: {
                    display: false,
                  },
                }],
                yAxes: [{
                  id: 'A',
                  type: 'linear',
                  position: 'left',
                  ticks: {
                    beginAtZero: true,
                    max: 60000
                  },
                  gridLines: {
                    display: false,
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'Nombre de mise en vente, de réservations'
                  }
                }, {
                  id: 'B',
                  type: 'linear',
                  position: 'right',
                  ticks: {
                    beginAtZero: true,
                    max: 120000
                  },
                  gridLines: {
                    display: false,
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'Encours'
                  }
                }]
              },
              annotation: {
                annotations: [{
                  type: 'line',
                  mode: 'horizontal',
                  scaleID: 'y-axis-0',
                  value: 17000,
                  borderColor: 'white',
                  borderWidth: 0,
                  label: {
                    xAdjust: 50,
                    fontSize: 14,
                    fontColor: '#7D204C',
                    backgroundColor: 'silver',
                    content: "-46% sur un an ",
                    enabled: true,
                    position: 'right'
                  }
                },
                {
                  type: 'line',
                  mode: 'horizontal',
                  scaleID: 'y-axis-0',
                  value: 38000,
                  borderColor: 'white',
                  borderWidth: 0,
                  label: {
                    xAdjust: 50,
                    fontSize: 14,
                    fontColor: '#1DE9B6',
                    backgroundColor: 'silver',
                    content: "-41% sur un an ",
                    enabled: true,
                    position: 'right'
                  }
                }],
                drawTime: 'beforeDatasetsDraw'
              }
            },
            
        });
    }
    render() {
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
  }
  
export default LineGraphShort;