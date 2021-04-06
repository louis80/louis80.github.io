import React from 'react';

import { Link } from "react-router-dom";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';

import img_recap from './img/recap_steps.PNG';

class DeployAWS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width_ : window.innerWidth };
    }

    handleResize = e => {
        this.setState({width_ : window.innerWidth});
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        this.handleResize();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    render() {

//function CovidImmo() {
    return (
    <div>
        <div>
            <div className='header-image top-img-article-deploy-aws'></div>
            <div className='header-title' style={{maxWidth:'1140px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '2rem', paddingRight: '2rem'}}  >
            </div>
        </div>
        <div className='container-page' >

            <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link href="/">
                    <HomeIcon fontSize='small'/>
                </Link>
                <Typography color="textPrimary"> Article </Typography>
                <Typography color="textPrimary"> The easiest way to deploy a webapp using AWS </Typography>
            </Breadcrumbs>

            <h1 className='title' style={{marginTop:'3rem'}}> The easiest way to deploy a webapp using AWS </h1>
            <p className="introduction" style={{marginTop:'2rem'}}>
            This tutorial assumes that : <br/>
            • you have knowledge on implementing a webapp using React,  Python (Flask) and PostgreSQL<br/>
            • you have an AWS account setup and ready to use<br/><br/>

            This tutorial is broken down into several parts : after setting up a web application that works locally, we are going to deploy the database using Amazon RDS. Once done, the Flask API will be deployed using Zappa (). Finally the front-end will be deployed using AWS Amplify :
            </p>

            <img src={img_recap} class="card-img img-article h-100" alt="image-article"></img>


            {/*---------------------------------------------------------------------------------*/}
            <h2 className='sub-title' style={{marginTop:'3rem'}}> 0. Run the app locally </h2>
            <p className="text" style={{marginTop:'2rem'}}>
            Text descriptin
            </p>


            <h2 className='sub-title' style={{marginTop:'3rem'}}> I. Setup the database </h2>
            <p className="text" style={{marginTop:'2rem'}}>
            Text descriptin
            </p>

            <h2 className='sub-title' style={{marginTop:'3rem'}}> II. Deploy the API </h2>
            <p className="text" style={{marginTop:'2rem'}}>
            Text descriptin
            </p>

            <h2 className='sub-title' style={{marginTop:'3rem'}}> III. Deploy the front-end </h2>
            <p className="text" style={{marginTop:'2rem'}}>
            Text descriptin
            </p>



        </div>
    </div>
    );
    }
}

export default DeployAWS;
