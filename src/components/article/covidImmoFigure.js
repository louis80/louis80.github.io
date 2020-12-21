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
                    var ctx = this.chart.ctx;                    
                    ctx.font = "bold 12px 'Helvetica Neue', Helvetica, Arial, sans-serif";
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    this.data.datasets.forEach(function (dataset) {
                        if ( dataset.data.length === 1 && dataset.data[0].y === 12000){
                          var model_ = dataset._meta[Object.keys(dataset._meta)[0]].data[0]._model;
                          var width_ = ctx.measureText('- 43% sur un an ').width+10;
                          var height_ = 20;
                          ctx.fillStyle = "#7D204C";
                          ctx.fillRect(model_.x-(width_/2), model_.y-(height_/2), width_, height_);
                          ctx.fillStyle = 'white';
                          ctx.fillText('- 43% sur un an ', model_.x, model_.y+7);

                          //ctx.fillStyle = '#7D204C';
                          //ctx.fillText('- 43% sur un an ', model.x, model.y - 5);
                        
                        }else if(dataset.data.length === 1 && dataset.data[0].y === 45000){
                          var model_ = dataset._meta[Object.keys(dataset._meta)[0]].data[0]._model;
                          var width_ = ctx.measureText('- 39% sur un an ').width+10;
                          var height_ = 20;
                          ctx.fillStyle = "#1DE9B6";
                          ctx.fillRect(model_.x-(width_/2), model_.y-(height_/2), width_, height_);
                          ctx.fillStyle = 'white';
                          ctx.fillText('- 39% sur un an ', model_.x, model_.y+7);

                          //ctx.fillStyle = '#1DE9B6';
                          //var model = dataset._meta[Object.keys(dataset._meta)[0]].data[0]._model;
                          //ctx.fillText('- 39% sur un an ', model.x, model.y - 5);

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
                //annotations: annotations
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
  
class EvolSocioParis extends Component {
    chartRef = React.createRef();
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017" ],
                datasets: [
                  // IMMOBILIER PARIS
                  {
                    fill: false, borderColor: "rgba(0,0,0,0)", label: "", yAxisID: 'B', type: 'line', datalabels: { display: false },
                    data: [{x: "2015", y: 10700 }]
                  },
                  // CADRE
                  {
                    fill: false, borderColor: "rgba(0,0,0,0)", label: "", yAxisID: 'A', type: 'line', datalabels: { display: false },
                    data: [{x: "2015", y: 113 }]
                  },
                  // Profession INTERMEDIAIRE
                  {
                    fill: false, borderColor: "rgba(0,0,0,0)", label: "", yAxisID: 'A', type: 'line', datalabels: { display: false },
                    data: [{x: "2015", y: 95 }]
                  },
                  // OUVRIER
                  {
                    fill: false, borderColor: "rgba(0,0,0,0)", label: "", yAxisID: 'A', type: 'line', datalabels: { display: false },
                    data: [{x: "2015", y: 82 }]
                  },

                  {
                    borderColor: "#3E1026", 
                    // backgroundColor: "#1DE9B6", 
                    fill: false,
                    label: "Cadres",
                    yAxisID: 'A',
                    data: [100, null, null, null, null, 107.9, null, null, null, null, 110.6],
                    type: 'line'
                  }, 
                  //{
                    // borderColor: "#64193C",
                    // backgroundColor: "#7D204C",
                    // fill: false,
                    // label: "Artisans, commerçants, chefs d'entreprise",
                    // yAxisID: 'A',
                    // data: [100, null, null, null, null, 106.5, null, null, null, null,  115.8],
                    // type: 'line'
                  // },
                  //{
                  //  borderColor: "#7d204c",
                    // backgroundColor: "#7D204C",
                  //  fill: false,
                  //  label: "Employés",
                  //  yAxisID: 'A',
                  //  data: [100, null, null, null, null, 97.7, null, null, null, null, 90.0],
                  //  type: 'line',
                  //  pointStyle: 'triangle',
                  //  borderWidth : 3,
                  //},
                  {
                    borderColor: "#CBA5B7", 
                    // backgroundColor: "green", 
                    fill: false,
                    label: "Ouvriers",
                    yAxisID: 'A',
                    data: [100, null, null, null, null, 93.4, null, null, null, null, 82.2],
                    type: 'line',
                    //borderWidth : 3,
                    // pointRadius: 0,
                    // borderDash : [0,6],
                    // borderCapStyle : 'round'
                  }, 
                  {
                    borderColor: "#A46281", 
                    // backgroundColor: "green", 
                    fill: false,
                    label: "Professions intermédiaires",
                    yAxisID: 'A',
                    data: [100, null, null, null, null, 101.5, null, null, null, null, 96.5],
                    type: 'line',
                    //borderDash: [10,5],
                  },
                  {
                    borderColor: "#1DE9B6", 
                    fill: false,
                    label: "Prix de l'immobilier à Paris",
                    yAxisID: 'B',
                    //    ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017" ],
                    data: [7240, 7870, 7950, 8070, 9600, 10220, 10240, 10000, 9620, 10060, 10750],
                    type: 'line',
                  },
                ]
            },
            options: {
              hover: {animationDuration: 0}, 
              animation: {
                duration: 0,
                //https://www.insee.fr/fr/statistiques/2011101?geo=ARR-751
                onComplete: function () {
                    var ctx = this.chart.ctx;                    
                    ctx.font = "bold 12px 'Helvetica Neue', Helvetica, Arial, sans-serif";
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    this.data.datasets.forEach(function (dataset) {
                        console.log('data', dataset.data[0].y)
                        if ( dataset.data.length === 1 && dataset.data[0].y === 82){
                          var model_ = dataset._meta[Object.keys(dataset._meta)[0]].data[0]._model;
                          var width_ = ctx.measureText('Ouvriers : - 21.7% sur dix ans').width+10;
                          var height_ = 20;
                          ctx.fillStyle = "#CBA5B7";
                          ctx.fillRect(model_.x-(width_/2), model_.y-(height_/2), width_, height_);
                          ctx.fillStyle = 'white';
                          ctx.fillText('Ouvriers : - 21.7% sur dix ans', model_.x, model_.y+7);

                        } else if(dataset.data.length === 1 && dataset.data[0].y === 95){
                          var model_ = dataset._meta[Object.keys(dataset._meta)[0]].data[0]._model;
                          var width_ = ctx.measureText('Professions intermédiaires : -3.6% sur dix ans').width+10;
                          var height_ = 20;
                          ctx.fillStyle = "#A46281";
                          ctx.fillRect(model_.x-(width_/2), model_.y-(height_/2), width_, height_);
                          ctx.fillStyle = 'white';
                          ctx.fillText('Professions intermédiaires : -3.6% sur dix ans', model_.x, model_.y+7);

                        } else if(dataset.data.length === 1 && dataset.data[0].y === 113){
                          var model_ = dataset._meta[Object.keys(dataset._meta)[0]].data[0]._model;
                          var width_ = ctx.measureText('Cadres : +9.6% sur dix ans').width+10;
                          var height_ = 20;
                          ctx.fillStyle = "#3E1026";
                          ctx.fillRect(model_.x-(width_/2), model_.y-(height_/2), width_, height_);
                          ctx.fillStyle = 'white';
                          ctx.fillText('Cadres : +9.6% sur dix ans', model_.x, model_.y+7);

                        } else if(dataset.data.length === 1 && dataset.data[0].y === 10700){
                          var model_ = dataset._meta[Object.keys(dataset._meta)[0]].data[0]._model;
                          var width_ = ctx.measureText('Immobilier Paris : +33% sur dix ans').width+10;
                          var height_ = 20;
                          ctx.fillStyle = "#1DE9B6";
                          ctx.fillRect(model_.x-(width_/2), model_.y-(height_/2), width_, height_);
                          ctx.fillStyle = 'white';
                          ctx.fillText('Immobilier Paris : +33% sur dix ans', model_.x, model_.y+7);

                        }
                    });
              }},
              legend: {
                display: false
              },
              spanGaps: true,
              tooltips: {
                mode: 'index',
                intersect: true
              },
              scales: {
                xAxes: [{
                  // stacked: true,
                  gridLines: {
                    display: false,
                  },
                }],
                yAxes: [{
                  // stacked: true, 
                  id: 'A',
                  type: 'linear',
                  position: 'left',
                  ticks: {
                    beginAtZero: true,
                    min: 80,
                    max: 120
                  },
                  gridLines: {
                    // display: false,
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'Catégories socioprofessionnelles (Indice base 100)',
                    fontColor: "#64193C",
                  }
                }, {
                  id: 'B',
                  type: 'linear',
                  position: 'right',
                  ticks: {
                    beginAtZero: true,
                    min: 7000,
                    max: 11000
                  },
                  gridLines: {
                    display: false,
                  },
                  scaleLabel: {
                    display: true,
                    labelString: "Prix de l'immobilier à Paris (m²)",
                    fontColor: "#1DE9B6",
                  }
                }]
              },
          
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

class InflationCreationMonetaire extends Component {
    chartRef = React.createRef();
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: [ 
                         "1970","1971","1972","1973","1974","1975","1976","1977","1978","1979",
                         "1980","1981","1982","1983","1984","1985","1986","1987","1988","1989",

                         "1990","1991","1992","1993","1994","1995","1996","1997","1998","1999",
                         "2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010",
                         "2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"],
                datasets: [

                  
                  {
                    borderColor: "green", 
                    // backgroundColor: "green", 
                    fill: false,
                    label: "M2",
                    yAxisID: 'B',
                    data: [null, null, null, null, null, null, null, null, null, null, 264462, 293873, 328974, 364822, 399942, 431632, 444408, 467075, 485668, 501524, 527792, 521755, 516087, 509314, 512318, 536114, 572991, 574364, 629896, 671926, 684255, 730351, 794248, 826467, 863029, 942665, 1012933, 1087208, 1241516, 1300333, 1338325, 1431829, 1526265, 1577523, 1613513, 1697300, 1778574, 1871869, 2038358, 2166351, 2314411] ,
                    type: 'line',
                  },
                  {
                    borderColor: "#CBA5B7", 
                    // backgroundColor: "green", 
                    fill: false,
                    label: "Inflation",
                    yAxisID: 'A',
                    data: [ 
                           5.2, 5.7, 6.2, 9.2, 13.7, 11.8, 9.6, 9.4, 9.1, 10.8, 
                           13.6, 13.4, 11.8, 9.6, 7.4, 5.8, 2.7, 3.1, 2.7, 3.6,
                           3.4, 3.3, 2.3, 2.1, 1.7, 1.9, 2  ,1.2 , 0.6, 0.5,
                           1.7, 1.6, 2  , 2.1, 2.1, 1.9, 1.6, 1.5, 2.8, 0.1, 
                           1.5, 2.1, 2  , 0.9, 0.5, 0  , 0.2, 1  , 1.8, 1.1 ],
                    type: 'line',
                  },
                  {
                    borderColor: "#1DE9B6", 
                    fill: false,
                    label: "Indice logements ancien France",
                    yAxisID: 'A',
                    //    ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017" ],
                    data: [100, 106, 116, 128, 147, 164, 190, 219, 245, 277, 
                           332, 368, 389, 409, 425, 439, 459, 492, 545, 611,
                           665, 699, 683, 673, 672, 666, 671, 683, 691, 740,
                           805, 868, 940, 105, 121, 1395, 156, 168, 169, 157


                    ],
                           
                    type: 'line',
                  },
                ]
            },
            options: {
             
              spanGaps: true,
              tooltips: {
                mode: 'index',
                intersect: true
              },
              scales: {
                xAxes: [{
                  // stacked: true,
                  gridLines: {
                    display: false,
                  },
                }],
                yAxes: [{
                  // stacked: true, 
                  id: 'A',
                  type: 'linear',
                  position: 'left',
                  ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 200
                  },
                  gridLines: {
                    // display: false,
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'Inflation Moyenne Annuelle en France',
                    fontColor: "#64193C",
                  }
                }, {
                  id: 'B',
                  type: 'linear',
                  position: 'right',
                  ticks: {
                    beginAtZero: true,
                    min: 7000,
                    max: 3000000
                  },
                  gridLines: {
                    display: false,
                  },
                  scaleLabel: {
                    display: true,
                    labelString: "Prix de l'immobilier en France (base 100)",
                    fontColor: "#1DE9B6",
                  }
                }]
              },
          
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


var date = [
    "1990","1991","1992","1993","1994","1995","1996","1997","1998","1999",
    "2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010",
    "2011","2012","2013","2014","2015","2016","2017","2018","2019"];

              // 90 , 91 , 92 , 93 , 94 , 95 , 96 , 97 , 98 , 99  
var inflation = [
                 5.2, 5.7, 6.2, 9.2, 13.7, 11.8, 9.6, 9.4, 9.1, 10.8, 
                 13.6, 13.4, 11.8, 9.6, 7.4, 5.8, 2.7, 3.1, 2.7, 3.6, 
                 3.4, 3.3, 2.3, 2.1, 1.7, 1.9, 2  ,1.2 , 0.6, 0.5,
                 1.7, 1.6, 2  , 2.1, 2.1, 1.9, 1.6, 1.5, 2.8, 0.1, 
                 1.5, 2.1, 2  , 0.9, 0.5, 0  , 0.2, 1  , 1.8, 1.1 ];
// https://france-inflation.com/inflation-depuis-1901.php
// http://www.cgedd.developpement-durable.gouv.fr/prix-immobilier-evolution-a-long-terme-a1048.html
// webstat.banque-france.fr/fr/quickview.do?SERIES_KEY=279.BSI1.M.FR.N.V.M20.A.1.U2.2300.Z01.E&start=01/01/1970&end=01/10/2020&trans=YVC&submitOptions.x=0&submitOptions.y=0
// https://france-inflation.com/evolution-immobilier-ancien.php
export {
  CommercialisationLogementsNeufs,
  EvolSocioParis,
  InflationCreationMonetaire
}