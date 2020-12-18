import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';
import LeftBar from './components/layout/LeftBar'

function BlogPage() {
  return <div>TESTT Blog page</div>;
}

function ShowDiv() {
  return <div style={{border:'solid green 10px', height:'100%', width:'100%'}}> test </div>;
}

class App extends React.Component {
  render() {
    return (
      <div className='d-flex' style={{height:'100%'}}> 
      <Router>
        <LeftBar/> 
        <div style={{height:'100%', width:'100%'}}>
          <div className='' style={{backgroundColor:'grey', height:'56px', width:'100%'}}> test </div>
          <Route exact path="/" component={BlogPage} />
          <Route exact path="/test" component={ShowDiv} />
        </div>
      </Router>
        
      </div>
    );
  }
}

export default App;
