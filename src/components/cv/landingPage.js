import React from 'react';
import { Link } from "react-router-dom";

import ImgFrance from '../article/img/france.png';


class LandingPageCV extends React.Component {

  render() {

    return (
      <div className='main-container-cv'>
        <div className='container-page-cv'>

          <div className='container-section-cv container-header-cv'>
            <h3 className='header-cv-title'> About me </h3>
            <div className='separator'> </div>
            <div className='spacer'> </div>
            <div className='row'>
              <div className='col-md-3'>
                <img src={ImgFrance} className='header-cv-img-profile' alt="img-profile"></img>
              </div>
              <div className='col-md-9' >
                {/* style={{ border: 'solid 1px red' }} */}
                <div className='header-cv-subtitle'>
                  Hi !
                </div>
                <div className='header-cv-text'>
                  I am Louis, a data scientist from Paris, France.
                  <div className='sub-spacer'> </div>
                  For more than 3 years, I have been helping several companies in the
                  implementation of their data strategy, from both the technical side and the
                  management side of their projects, together with a good understanding of their
                  business needs.
                  <div className='sub-spacer'> </div>
                  I was thus able to develop skills as Data-Analyst, Scientist, Data-Engineer and ML
                  Ops for the deployment of solutions
                </div>
              </div>
            </div>
          </div>

          <div className='spacer'> </div>

          <div className='container-section-cv'>
            <h3 className='section-cv-title'> Skills & certifications </h3>
            <div className='separator'> </div>
            <div className='spacer'> </div>
            <div className='row'></div>
          </div>

          <div className='container-section-cv'>
            <h3 className='section-cv-title'> Experiences </h3>
            <div className='separator'> </div>
            <div className='spacer'> </div>
            <div className='row'></div>
          </div>

          <div className='spacer'> </div>

          <div className='container-section-cv'>
            <h3 className='section-cv-title'> Education </h3>
            <div className='separator'> </div>
            <div className='spacer'> </div>
            <div className='row'></div>
          </div>


        </div>
      </div >
    );
  }
}

export default LandingPageCV;
