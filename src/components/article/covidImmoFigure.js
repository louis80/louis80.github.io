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
                  "1980", "1981","1982","1983","1984","1985","1986","1987","1988","1989",
                  "1990", "1991","1992","1993","1994","1995","1996","1997","1998","1999",
                  "2000", "2001","2002","2003","2004","2005","2006","2007","2008","2009",
                  "2010", "2011","2012","2013","2014","2015","2016","2017","2018","2019", "2020"],
                datasets: [

                  
                  {
                    borderColor: "#7D204C", 
                    // backgroundColor: "green", 
                    fill: false,
                    label: "Agrégats monétaires M2 (encours)",
                    yAxisID: 'A',
                    data:["0.38649626235833134","0.4294787761872401","0.4807769033474363","0.5331667287780141","0.5844926233640967","0.6308057668559236","0.6494771685994256","0.6826037076820776","0.7097763260772665","0.7329489737013248","0.7713381707112115","0.7625154364966277","0.7542319749216301","0.7443336183148095","0.7487237944918196","0.7835003032495196","0.837393954008374","0.8394005158895441","0.9205573945385858","0.9819818634865657","1.0","1.0673666980877012","1.1607485513441627","1.2078347984304096","1.2612680944969346","1.377651606491732","1.4803443160809933","1.5888930296453807","1.8144054482612477","1.9003631687017266","1.9558863289270814","2.0925371389321232","2.230550014249074","2.3054606835171096","2.358058033920103","2.480507997749377", "2.59928535", "2.73563072", "2.97894498", "3.16599952", "3.38238084"],
                    type: 'line',
                  },
                  {
                    borderColor: "#CBA5B7", 
                    // backgroundColor: "green", 
                    fill: false,
                    label: "Prix à la consommation",
                    yAxisID: 'A',
                    data:["0.4582426141021435","0.5196471243918308","0.581051634681518","0.6369572336019794","0.6841562228545003","0.7240233302813868","0.7432695200736769","0.7666398933928862","0.7872608110274827","0.8156718531018154","0.8431664099479441","0.8701477350662784","0.891226895314977","0.9097765563338317","0.9249535517128948","0.9409737135019056","0.9595233745207604","0.9713277042600317","0.9780730355396152","0.9833713726768829","1","1.016270337922403","1.0362953692115142","1.0575719649561952","1.0801001251564455","1.100125156445557","1.1180225281602","1.134668335419274","1.1665832290362952","1.167584480600751","1.1853566958698372","1.2103879849812265","1.2340425531914891","1.2448060075093865","1.2510638297872338","1.2515644555694618", null, null, null, null, null],
                    type: 'line',
                  },
                  {
                    borderColor: "#1DE9B6", 
                    fill: false,
                    label: "Prix des logements anciens",
                    yAxisID: 'A',
                    //    ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017" ],
                    data:["0.41266814965085113","0.45809211166559144","0.4837910038434182","0.5085126668263098","0.5283510268551337","0.5457824697583469","0.5711302309829176","0.6117286932429963","0.6777616875200895","0.7595005600615797","0.826407234113268","0.8694139466576468","0.8488245212494203","0.836591320843181","0.8350438076148249","0.8274331467568234","0.8346957478731962","0.849451359109658","0.858987530749018","0.9198019801980198","1","1.0792079207920793","1.1722772277227724","1.311881188118812","1.50990099009901","1.7425742574257426","1.9524752475247524","2.0801980198019803","2.09950495049505","1.9495049504950495","2.0495049504950495","2.1712871287128714","2.15990099009901","2.1143564356435647","2.0772277227722773","2.0386138613861386", "2.05695749", "2.1186662146999997", "2.1843448673556995", "2.2629812825805047", "2.3421856274708213"],
                    type: 'line',
                  },
                ]
            },
            options: {
              elements: {
                point:{
                    radius: 0
                }
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
                    min: 0,
                    max: 3.5
                  },
                  gridLines: {
                    // display: false,
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'Indice (base 2000)',
                    fontColor: "grey",
                  }
                },]
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


// https://france-inflation.com/inflation-depuis-1901.php
// http://www.cgedd.developpement-durable.gouv.fr/prix-immobilier-evolution-a-long-terme-a1048.html
// webstat.banque-france.fr/fr/quickview.do?SERIES_KEY=279.BSI1.M.FR.N.V.M20.A.1.U2.2300.Z01.E&start=01/01/1970&end=01/10/2020&trans=YVC&submitOptions.x=0&submitOptions.y=0
// https://france-inflation.com/evolution-immobilier-ancien.php
// webstat.banque-france.fr/fr/quickview.do?SERIES_KEY=279.BSI1.M.FR.N.V.M20.A.1.U2.2300.Z01.E

// https://fr.statista.com/statistiques/1119722/variation-prix-logements-marche-immo-ancien-france/

export {
  CommercialisationLogementsNeufs,
  EvolSocioParis,
  InflationCreationMonetaire
}