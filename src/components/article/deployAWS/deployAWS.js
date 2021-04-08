import React from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from 'prism-react-renderer/themes/dracula';

import { Link } from "react-router-dom";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';

import img_recap from './img/recap_steps.PNG';
import security_group_11 from './img/11_security_group.PNG';
import security_group_12 from './img/12_security_group.PNG';
import database_13 from './img/13_database.PNG';

function CodeHighlight(codesample) {
    return (
    <Highlight theme={dracula} {...defaultProps} code={codesample} language="python">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
            {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
                ))}
            </div>
            ))}
        </pre>
        )}
    </Highlight>
    );
}

const ConnectionToDatabase = `
import yaml
from sqlalchemy import create_engine
import psycopg2

# need improvment
try:
    f = open('config.yml', 'r')
    conf = yaml.safe_load(f)
except:
    conf = yaml.load(os.getenv("PROJECT_CONFIG"))

engine = create_engine('postgresql://'
      + conf["project-database"]["user"] + ':'
      + conf["project-database"]["password"] + '@'
      + conf["project-database"]["hostname"] +':' + '5432/'
      + conf["project-database"]["name"])
`;


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
            The main objective of this article is to present a simple way to deploy a webapp using the different Amazon web services.<br/><br/>
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
            <p className="text" style={{fontWeight:'bold', marginTop:'2rem'}}>
            Create a security groups
            </p>
            <p className="text" style={{marginTop:'1rem'}}>
            In order to access the database from our API or local network if needed,
            it is necessary to create security groups.
            Those will enable us to manage network access to our Amazon RDS instance.<br/>
            To create a security service, go to the EC2 dashboard and click on “Security groups” :
            </p>

            <img src={security_group_11} class="card-img img-article h-100" alt="image-article"></img>

            <p className="text" style={{marginTop:'1rem'}}>
            Then click on “Create security group”, fill the security group name and the description.<br/><br/>
            Let’s add an inbound rules : select “All traffic” for the type and “Anywhere” for the source :
            </p>

            <img src={security_group_12} style={{border:'solid silver 0.5px'}} class="card-img img-article h-100" alt="image-article"></img>

            <p className="text" style={{marginTop:'1rem'}}>
            blabla security <br/><br/>
            Finally click on “Create security group” at the bottom of the page
            </p>

            <p className="text" style={{fontWeight:'bold', marginTop:'2rem'}}>
            Create the database
            </p>
            <p className="text" style={{marginTop:'1rem'}}>
            Now that we have created the security group, let’s create the database.
            To do so, go to RDS services and click on “Create database”.
            There, you will find several settings section to be completed as follows
            (those following settings are for our simple example, you can obviously adapt the setting according to your needs) :<br/>
            <span style={{fontWeight:'540'}}>• Choose a database creation method </span> → Standard create <br/>
            <span style={{fontWeight:'540'}}>• Engine options</span>  → PostgreSQL <br/>
            <span style={{fontWeight:'540'}}>• Templates</span>  → Free tier <br/>
            <span style={{fontWeight:'540'}}>• Settings</span>  → choose a DB instance name, master username and password and note them somewhere <br/>
            <span style={{fontWeight:'540'}}>• DB instance class</span>  →  left as it is <br/>
            <span style={{fontWeight:'540'}}>• Storage</span>  →  left as it is <br/>
            <span style={{fontWeight:'540'}}>• Availability & durability</span> →  left as it is <br/>
            <span style={{fontWeight:'540'}}>• Connectivity </span> →  Select "Yes" for public access and choose your security group previously created in the "Existing VPC security groups" section (named "rds-demo" in this example) :<br/><br/>

            <img src={database_13} className='img-article' style={{textAlign:'center', margin:'auto', display:'flex'}} alt="image-article"></img>
              <br/><br/>

            <span style={{fontWeight:'540'}}>• Database authentication</span> →  left as it is <br/>
            <span style={{fontWeight:'540'}}>• Additional configuration</span> →  left as it is <br/> <br/>
            Finally click on “Create database” at the bottom of the page
            </p>

            <p className="text" style={{fontWeight:'bold', marginTop:'2rem'}}>
            Access the database from Python
            </p>

            <div style={{marginTop:'15px'}}> {CodeHighlight(ConnectionToDatabase)} </div>

            <p className="text" style={{marginTop:'1rem'}}>
            test
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
