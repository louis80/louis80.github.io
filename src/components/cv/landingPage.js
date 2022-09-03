import React from 'react';
import { Collapse, Tag, Divider } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';

import './cv.scss';

import ImgFrance from '../article/img/france.png';

import saa from './img/saa.png';
import mls from './img/mls.png';
import toeic from './img/toeic.png';

import sia from './img/sia.jfif';
import gpa from './img/gpa.png';
import hav from './img/hav.PNG';
import ass from './img/ass.jfif';

const { Panel } = Collapse;


function certificationRow(img, title, sub_title) {
  return (
    <div className='row row-certification'>
      <div className='col-md-2 container-img-certification' >
        <img src={img} className='img-certification' alt="img-certification"></img>
      </div>
      <div className='col-md-10 container-txt-certification' >
        <div className='title-certification'> {title} </div>
        <div className='sub-title-certification'> {sub_title} </div>
      </div>
    </div>
  )
}

function experienceHeader(img, title, sub_title) {
  return (
    <div className='row'>
      <div className='col-md-2 container-img-experience' >
        <img src={img} className='img-experience' alt="img-experience"></img>
      </div>
      <div className='col-md-10 container-txt-experience' >
        <div className='title-experience'> {title} </div>
        <div className='sub-title-experience'> {sub_title} </div>
      </div>
    </div>
  )
}

function experienceDetails(title, description, business_sector, skills) {
  return (
    <div className='pb-3'>
      <Divider orientation="left"> {title} </Divider>
      <div className='pb-3'>
        {description.map((des) => (<div>- {des}</div>))}
      </div>

      <div className='row'>
        <div className='col-md-3' >
          <div className='pb-2' style={{ fontWeight: '520' }}>Business Sector</div>
          <div><Tag color="blue">{business_sector}</Tag></div>
        </div>
        <div className='col-md-9' >
          <div className='pb-2' style={{ fontWeight: '520' }}>Skills & Expertise</div>
          <div>
            {skills.map((skill) => (<Tag color="blue">{skill}</Tag>))}
          </div>
        </div>
      </div>

    </div>
  )
}

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
            {certificationRow(mls, 'AWS Certified Machine Learning – Specialty', 'Amazon Web Services (AWS) - September 2022')}
            {certificationRow(saa, 'AWS Certified Solutions Architect - Associate (SAA)', 'Amazon Web Services (AWS) - June 2022')}
            {certificationRow(toeic, 'TOEIC - 955/990', 'Test of English for International Communication (TOEIC)')}
          </div>

          <div className='spacer'> </div>

          <div className='container-section-cv'>
            <h3 className='section-cv-title'> Experiences </h3>
            <div className='separator'> </div>
            <div className='spacer'> </div>

            <div className='row row-experience'>
              <Collapse
                bordered={false}
                defaultActiveKey={[1]}
                expandIcon={({ isActive }) => isActive ? <MinusCircleOutlined style={{ fontSize: '18px', color: '#08c' }} /> : <PlusCircleOutlined style={{ fontSize: '18px', color: '#08c' }} />}
                expandIconPosition="end"
                className="collapse-experience"
              >
                <Panel header={experienceHeader(sia, 'Sia Partners - Data Scientist / Engineer', 'May 2019 → Today - 3+ years - 10+ missions')} key="1" className="site-collapse-custom-panel">
                  {experienceDetails(
                    "1. Implementation of an orchestration tool for data pipelines",
                    ["a", "b", "c"],
                    "Energy",
                    ['AWS', "Terraform", "c", "d"]
                  )}


                </Panel>
                <Panel header={experienceHeader(gpa, 'Groupama - Data Scientist', 'September 2019 → May 2019 - 9 months')} key="2" className="site-collapse-custom-panel">
                  <p>b</p>
                </Panel>
                <Panel header={experienceHeader(hav, 'Havas DBI - Data Scientist', 'May 2018 → August 2018 - 4 months')} key="3" className="site-collapse-custom-panel">
                  <p>c text</p>
                </Panel>
                <Panel header={experienceHeader(ass, 'Assima - Data Analyst', 'June 2017 → August 2017 - 3 months')} key="4" className="site-collapse-custom-panel">
                  <p>c text</p>
                </Panel>
              </Collapse>
            </div>


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
