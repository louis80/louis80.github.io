import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

import LeftBar from './components/layout/LeftBar'

import LandingPageArticle from './components/article/landingPage'
import CovidImmo from './components/article/covidImmo'

import PythonGeneral from './components/python/general'
import PythonDataframe from './components/python/dataframe'
import PythonDatabase from './components/python/database'

function ShowDiv() {
  return <div>TESTT</div>;
}



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {paddingLeftBar : '80px' };
  }


  handleResize = e => {
    if (window.innerWidth > 700){
      this.setState({paddingLeftBar: '80px'});
    }else{
      this.setState({paddingLeftBar: '0px'});
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  render() {
    
    console.log(this.state);
    return (
      <div className='' style={{}}> 
      <Router>
        <LeftBar/>
        <div style={{height:'100%', paddingLeft:this.state.paddingLeftBar}}>
          <div className='' style={{backgroundColor:'#333', height:'51px', width:'100%'}}>  </div>
          <Route exact path="/" component={LandingPageArticle} />
          <Route exact path="/article/impact-du-covid-sur-immobilier" component={CovidImmo} />


          <Route exact path="/test" component={ShowDiv} />

          <Route exact path="/python/general" component={PythonGeneral} />
          <Route exact path="/python/dataframe" component={PythonDataframe} />
          <Route exact path="/python/database" component={PythonDatabase} />

          <Route exact path="/react" component={ShowDiv} />

          <Route exact path="/postgresql" component={ShowDiv} />

          <Route exact path="/github" component={ShowDiv} />
        </div>
      </Router>
        
      </div>
    );
  }
}

export default App;
