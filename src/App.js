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
  
  render() {
    return (
      <div className='d-flex' style={{height:'100%', width:'100%'}}> 
      <Router>
        <LeftBar/> 
        <div style={{height:'100%', flexGrow: "100"}}>
          <div className='' style={{backgroundColor:'#333', height:'48px', width:'100%'}}>  </div>
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
