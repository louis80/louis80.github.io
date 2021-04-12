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

import iam_register_21 from './img/21_iam_register.PNG';
import iam_register_22 from './img/22_iam_register.PNG';
// import a from './img/a.PNG';


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
import sqlalchemy
from sqlalchemy import create_engine
import psycopg2

USER = 'postgres'
PASSWORD = 'your_password'
PORT = '5432'
HOST = 'database-1.xxxxxxxxxxxx.eu-west-3.rds.amazonaws.com'
DBNAME = 'database-1'

uri_aws = 'postgresql://'+USER+':'+PASSWORD+'@'+HOST+'/'+USER

engine = create_engine(uri_aws)
print(engine.table_names())
# return [] as we didn't created any table
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
            <br/><br/>
            <div class="alert alert-warning" role="alert">
            <strong>[blabla security]  </strong>
            </div>
            <p className="text" style={{marginTop:'1rem'}}>
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
            <p className="text" style={{marginTop:'1rem'}}>
            As we have selected "Password authentication" in the "Database authentication" settings,
            we only need the authentication information previously defined to access the database from a Python script
            </p>
            <p className="text" style={{marginTop:'1rem'}}>
            [WHERE TO FIND IDS]
            </p>
            <div style={{marginTop:'15px'}}> {CodeHighlight(ConnectionToDatabase)} </div>

            <p className="text" style={{marginTop:'1rem'}}>
            test
            </p>



            <h2 className='sub-title' style={{marginTop:'3rem'}}> II. Deploy the API </h2>
            <p className="text" style={{marginTop:'2rem'}}>
            Regarding the deployment of the API, we are going to use Zappa, an open source python project
            which allow us to build, deploy and update an API on aws services (AWS Lambda and API Gateway).<br/>
            According to their documentation :
            </p>
            <div className="text" style={{backgroundColor:'rgba(192,192,192,0.1)', borderLeft: 'solid #007bff 5px', fontStyle: 'italic', padding:'10px'}}>
            «Zappa makes it super easy to build and deploy server-less, event-driven Python applications (including, but not limited to, WSGI web apps)
            on AWS Lambda + API Gateway. Think of it as "serverless" web hosting for your Python apps.
            That means infinite scaling, zero downtime, zero maintenance - and at a fraction of the cost of your current deployments!»
            </div>
            <p className="text" style={{marginTop:'1rem'}}>
            If you want more information on how zappa works or insights about serverless web hosting,
            you can read their very well done documentation <a target="_blank" href='https://github.com/zappa/Zappa' style={{textDecoration: 'underline'}}>here</a>.
            </p>


            <p className="text" style={{fontWeight:'bold', marginTop:'2rem'}}>
            Setup the AWS credentials
            </p>
            <p className="text" style={{marginTop:'1rem'}}>
            The first step of the API deployment is to setup AWS credentials.
            To do so, search for "IAM" in the AWS console then click on "Users" and on "Add user".<br/>
            Choose a username and for "Access type", select "Programmatic access" : <br/>
            </p>
            <img src={iam_register_21} style={{border:'solid silver 0.5px'}} class="card-img img-article h-100" alt="image-article"></img>
            <br/>
            <p className="text" style={{marginTop:'1rem'}}>
            Regarding the user permissions, select "Attach existing policies directly" and set the policies as "AdministratorAccess" which sould be the first proposition : <br/>
            </p>
            <img src={iam_register_22} style={{border:'solid silver 0.5px'}} class="card-img img-article h-100" alt="image-article"></img>
            <br/>
            <p className="text" style={{marginTop:'1rem'}}>
            After that, you can pass the tag section and diretly create the user.
            You will obtain : <br/>
            → Access key ID <br/>
            → Secret access key <br/>
            Keep them somewhere as we will use them later.  <br/>
            </p>


            <div class="alert alert-warning" role="alert">
            <strong>Creating a user this way is not optimal from a security point of view </strong> but AWS permissions can get quite complicated, so to get things up and running quickly
            we will start this way and I will come back to it at the end of this tutorial.
            </div>
            <p className="text" style={{marginTop:'1rem'}}>
            To configure the identifiers that will be used by Zappa for the deployment
            install the AWS CLI (that you can find <a target="_blank" href='https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html' style={{textDecoration: 'underline'}}>here</a>)
            and once it's done, in a new console write :
            </p>
            <div style={{marginTop:'15px'}}> {CodeHighlight(`\n$ aws configure\n`)} </div>
            <p className="text" style={{marginTop:'1rem'}}>
            You will be prompted for configuration values such as your AWS Access Key Id and your AWS Secret Access Key that you can copy and paste<br/>
            aws --version # to verify installation <br/>
            </p>

            <p className="text" style={{fontWeight:'bold', marginTop:'2rem'}}>
            Setup the virtual environment
            </p>
            <p className="text" style={{marginTop:'1rem'}}>
            <span style={{marginRight:'4px', padding:'2px 4px',backgroundColor:'silver', borderRadius:'3px'}}>Pipenv</span>
            is a Python package that we will used to create our virtual environment.
            To install it, you can use the following command in a Python bash :
            </p>
            <div style={{marginTop:'15px'}}> {CodeHighlight(`\n$ pip install pipenv\n`)} </div>
            <p className="text" style={{marginTop:'1rem'}}>
            Creating our virtual environment is then quite simple, just go in the root of the project where the requirements.txt file is located and type :
            </p>
            <div style={{marginTop:'15px'}}> {CodeHighlight(`\n$ pipenv install\n`)} </div>
            <p className="text" style={{marginTop:'1rem'}}>
            As there is already a requirements.txt file, It will generate a Pipfile file with the requirements and a virtual environment folder (otherwise, it would have generate an empty Pipfile).<br/>
            To activate the virtual environment that pipenv already generated, go with :
            </p>
            <div style={{marginTop:'15px'}}> {CodeHighlight(`\n$ pipenv shell\n`)} </div>


            <p className="text" style={{fontWeight:'bold', marginTop:'2rem'}}>
            Configure Zappa
            </p>
            <p className="text" style={{marginTop:'1rem'}}>
            We can install Zappa package by simply using the following command :
            </p>
            <div style={{marginTop:'15px'}}> {CodeHighlight(`\n$ pipenv install zappa\n`)} </div>
            <p className="text" style={{marginTop:'1rem'}}>
            It will then be added the Pipfile which is intended to specify packages requirements for
            the Python application, both to development and execution.<br/>
            Then just run :
            </p>
            <div style={{marginTop:'15px'}}> {CodeHighlight(`\n$ zappa init\n`)} </div>
            <p className="text" style={{marginTop:'1rem'}}>
            Which will generate a zappa_settings.json file including the deployment configuration.
            You can press enter for all the questions in order to get the default configuration.<br/>
            We get then a file looking like that : <br/>
            </p>
            <div style={{marginTop:'15px'}}>
              {CodeHighlight(`\n zappa_settings.json
{
    "dev": {
        "app_function": "app.app",
        "profile_name": "default",
        "project_name": "flask-api-example",
        "runtime": "python3.7",
        "s3_bucket": "flask-api-example",
        "aws_region": "eu-west-3"
    }
} \n`)}
            </div>
            <p className="text" style={{marginTop:'1rem'}}>
            Where : <br/>
            • <strong> app_function </strong> txt <br/>
            • <strong> profile_name </strong> txt <br/>
            • <strong> project_name </strong> txt <br/>
            • <strong> runtime </strong> txt <br/>
            • <strong> s3_bucket </strong> txt <br/>
            • <strong> aws_region </strong> txt <br/>
            </p>
            <p className="text" style={{marginTop:'1rem'}}>
            To add our environment variables (our database connection information),
            we can simply add the following line to the Zappa configuration file :
            </p>
            <div style={{marginTop:'15px'}}>
              {CodeHighlight(`\n zappa_settings.json
{
    "dev": {
        ...
        "aws_region": "eu-west-3",
        "environment_variables": {
            "HOST":"ec2-xx-xxx-xxx-xxx.eu-west-1.compute.amazonaws.com",
            "DATABASE":"DATABASE_NAME",
            "USER":"USERNAME",
            "PASSWORD":"YOUR_PASSWORD",
        },
        "exclude": [".env", "env_name"]
    }
} \n`)}
            </div>
            <p className="text" style={{marginTop:'1rem'}}>
            In addition, I added the "exclude" option to be sure that the local id located in the <i>.env</i> file are not deployed.<br/><br/>
            Now that we have configured our Zappa settings, we can deploy the API by simply using the following command :
            </p>
            <div style={{marginTop:'15px'}}> {CodeHighlight(`\n$ zappa deploy dev \n`)} </div>





            <br/><br/><br/>
            to see deployment -> go to AWS Lambda
            <br/><br/>
            https://stackoverflow.com/questions/46330327/how-are-pipfile-and-pipfile-lock-used <br/> <br/>





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
