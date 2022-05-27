import React from 'react';
import { HashRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';

// import ReactGA from 'react-ga';

import './App.css';

import LeftBar from './components/layout/LeftBar'

import LandingPageArticle from './components/article/landingPage'
import CovidImmo from './components/article/covidImmo/covidImmo'
import DeployAWS from './components/article/deployAWS/deployAWS'


import PythonGeneral from './components/python/general'
import PythonDataframe from './components/python/dataframe'
import PythonDatabase from './components/python/database'
import PythonRegex from './components/python/regex'

import Requests from './components/python/scraping/requests'
import BeautifulSoup from './components/python/scraping/beautifulsoup'
import Selenium from './components/python/scraping/selenium'

// import withTracker from './withTracker'

function ShowDiv() {
  return <div>TESTT</div>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { paddingLeftBar: '80px' };
  }

  handleResize = e => {
    if (window.innerWidth > 700) {
      this.setState({ paddingLeftBar: '80px' });
    } else {
      this.setState({ paddingLeftBar: '0px' });
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

    return (
      <div>
        <BrowserRouter>
          <LeftBar />
          <Switch>
            <div style={{ height: '100%', paddingLeft: this.state.paddingLeftBar }}>
              <div className='' style={{ backgroundColor: '#333', height: '51px', width: '100%' }}>  </div>
              <Route exact path="/" component={LandingPageArticle} />
              <Route exact path="/article/impact-du-covid-sur-immobilier" component={CovidImmo} />
              <Route exact path="/article/deploy-webapp-on-aws" component={DeployAWS} />

              <Route exact path="/test" component={ShowDiv} />

              <Route exact path="/python/general" component={PythonGeneral} />
              <Route exact path="/python/dataframe" component={PythonDataframe} />
              <Route exact path="/python/database" component={PythonDatabase} />
              <Route exact path="/python/dataviz" component={ShowDiv} />
              <Route exact path="/python/regex" component={PythonRegex} />
              <Route exact path="/python/scraping/requests" component={Requests} />
              <Route exact path="/python/scraping/beautifulsoup" component={BeautifulSoup} />
              <Route exact path="/python/scraping/selenium" component={Selenium} />

              <Route exact path="/react" component={ShowDiv} />

              <Route exact path="/postgresql" component={ShowDiv} />

              <Route exact path="/github" component={ShowDiv} />
            </div>
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
