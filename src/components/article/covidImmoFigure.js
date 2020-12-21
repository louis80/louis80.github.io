import React, {Component} from 'react';
import Chart from "chart.js";
import 'chartjs-plugin-annotation';
import * as ChartAnnotation from 'chartjs-plugin-annotation';


var annotations = [
  {
    type: 'line',
    id: 'vline' ,
    mode: 'vertical',
    scaleID: 'x-axis-0',
    value: "2019 T4",
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    label: {
      yAdjust: -100,
       enabled: true,
       backgroundColor: '#1DE9B6',
       position: "center",
       content: '- 39% sur un an '
    }
  },
  {
    type: 'line',
    mode: 'vertical',
    scaleID: 'x-axis-0',
    value: "2019 T4",
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    label: {
      yAdjust: 120,
      backgroundColor: '#7D204C',
      enabled: true,
      position: "center",
      content: '- 43% sur un an '
    }
  },

];


class CommercialisationLogementsNeufs extends Component {
    chartRef = React.createRef();
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "bar",
            plugins: [ChartAnnotation],
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
                    borderColor: "rgba(0,0,0,0)", 
                    label: "label1",
                    yAxisID: 'A',
                    type: 'line',
                    datalabels: {
                      display: true
                    },
                    data: [
                      {
                        x: "2019 T4",
                        y: 12000 
                      }
                    ]
                  },
                  {
                    fill: false,
                    borderColor: "rgba(0,0,0,0)", 
                    label: "label2",
                    yAxisID: 'A',
                    type: 'line',
                    datalabels: {
                      display: true
                    },
                    data: [
                      {
                        x: "2019 T4",
                        y: 45000 
                      }
                    ]
                  },
              
                  {
                    fill: false,
                    borderColor: "silver", 
                    label: "line1",
                    yAxisID: 'A',
                    type: 'line',
                    datalabels: {
                      display: true
                    },
                    data: [
                      {
                        x: "2019 T2",
                        y: 12000 
                      }, {
                        x: "2020 T2",
                        y: 12000  
                      }
                    ]
                  },

                              
                  {
                    fill: false,
                    borderColor: "silver", 
                    label: "line2",
                    yAxisID: 'A',
                    type: 'line',
                    datalabels: {
                      display: true
                    },
                    data: [
                      {
                        x: "2019 T2",
                        y: 45000 
                      }, {
                        x: "2020 T2",
                        y: 45000  
                      }
                    ]
                  },


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
              hover: {animationDuration: 0}, 
              animation: {
                duration: 0,
               
                onComplete: function () {
                    // render the value of the chart above the bar
                    var ctx = this.chart.ctx;
                    //ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
                    
                    ctx.font = "bold 12px 'Helvetica Neue', Helvetica, Arial, sans-serif";
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    this.data.datasets.forEach(function (dataset) {
                        if ( dataset.data.length === 1 && dataset.data[0].y === 12000){
                          var model = dataset._meta[Object.keys(dataset._meta)[0]].data[0]._model;
                          ctx.fillStyle = '#7D204C';
                          ctx.fillText('- 43% sur un an ', model.x, model.y - 5);
                          //for (var i = 0; i < dataset.data.length; i++) {
                          //    var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
                          //    ctx.fillText('- 43% sur un an ', model.x, model.y - 5);
                          //}
                        }else if(dataset.data.length === 1 && dataset.data[0].y === 45000){
                          ctx.fillStyle = '#1DE9B6';
                          var model = dataset._meta[Object.keys(dataset._meta)[0]].data[0]._model;
                          ctx.fillText('- 39% sur un an ', model.x, model.y - 5);

                        }
                    });
                    // ctx.style.backgroundColor = '#7D204C';
                }},

              tooltips: {
                mode: 'index',
                intersect: true
              },
              legend: {
                labels: {
                    filter: function(item, chart) {
                      return !item.text.includes('line1') && !item.text.includes('line2') && !item.text.includes('label1') && !item.text.includes('label2');
                    }
                }
              },
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
                drawTime: "afterDraw", 
                annotations: annotations
              },
             
            }
            
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
  
export default CommercialisationLogementsNeufs;