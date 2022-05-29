import React from 'react';
import { Link } from "react-router-dom";

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TodayIcon from '@material-ui/icons/Today';
import Chip from '@material-ui/core/Chip';
// import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

import ImgIndexFund from './img/indexFund/indexFund.jpg';
import ImgDeployAWS from './img/deployAWS/deployAWS.jpg';
import ImgImmo from './img/covidImmo/resumeCovidImmo.jpeg';
import ImgBoilerplateAWS from './img/boilerplateAWS/boilerplateAWS.jpg';


import ImgFrance from '../article/img/france.png';
import ImgRoyaumeUni from '../article/img/royaume-uni.png';


const dic_article = [
  {
    id: '0',
    title: 'Implementation of an index fund portofolio',
    tag: ['Jupyter Notebook', 'October 2018', '14 minutes'],
    description: "The main goal of this work is to understand and overcome the different stages of building an index fund. This notebook presents an implementation of a constrained optimization problem whose objectif is to select the right asset mix to build an index fund portofolio",
  },
  {
    id: '1',
    title: 'The easiest way to deploy a Flask webapp on AWS',
    tag: ['Article', 'January 2019', '15 minutes'],
    description: "The main objective of this article is to present a simple way to deploy a webapp using the different Amazon web services. This tutorial is broken down into several parts : after setting up a web application that works locally, we are going to deploy the database using Amazon RDS. Once done, the Flask API will be deployed using Zappa. Finally the front-end will be deployed using AWS Amplify",
  },
  {
    id: '2',
    title: 'Impacts du Covid-19 sur le marché de l\'immobilier',
    tag: ['Article', 'December 2020', '12 minutes'],
    description: "Depuis le début de la crise Covid, les analyses se multiplient dans de nombreux domaines pour anticiper à quoi ressemblera \'le monde d’après\'. Le marché de l’immobilier est lui aussi affecté par la crise, et son futur apparaît aujourd’hui incertain. Sans prétendre prédire l’évolution du cours de ce marché, cet article vise à en expliquer les déterminants essentiels, et les principaux enjeux. ",
  },
  {
    id: '3',
    title: 'Deployment of a dockerised boilerplate on AWS',
    tag: ['Code Repository', 'In progress'],
    description: "This repository is a dockerised boilerplate based on FastAPI, React & Postgres. It was created to be setup and deployed in less than 10 minutes on AWS while providing reusable and usefull functionalities : authentification feature, components template, admin page & different deployment options (serverless, dockerised ...).",
  },
]


function getArticle(dic_article, LogoImg, LogoLang) {
  return (
    <div className='my-5' style={{ maxWidth: "1130px", cursor: 'pointer', boxShadow: '0 0 30px 6px rgba(31, 51, 73, 0.10)', marginRight: 'auto', marginLeft: 'auto' }}>
      <div className="row m-0">

        <div className="container-img-article m-0" style={{ backgroundColor: 'grey' }}>
          <img src={LogoImg} class="card-img img-article h-100" alt="image-article"></img>
        </div>

        <div className="container-resume-article m-0">
          <div className='d-flex'>
            <h3 className="card-title-article m-0" > {dic_article.title} </h3>
            <img src={LogoLang} class='my-auto ml-auto' style={{ height: '30px' }} alt="lang-flag"></img>

          </div>
          <div className="mb-1 mt-2">
            {/* {dic_article.tag.map((tag) => (
              <Chip className='m-1' label={tag} style={{ cursor: 'pointer' }} />
            ))} */}
            {dic_article.tag[0] === "Article" ? <Chip color="primary" icon={<TodayIcon fontSize='small' />} className='m-1' label={dic_article.tag[0]} style={{ cursor: 'pointer' }} /> : ""}
            {dic_article.tag[0] === "Jupyter Notebook" ? <Chip color="primary" icon={<AccessTimeIcon fontSize='small' />} className='m-1' label={dic_article.tag[0]} style={{ cursor: 'pointer' }} /> : ""}
            {dic_article.tag[0] === "Code Repository" ? <Chip color="primary" icon={<AccessTimeIcon fontSize='small' />} className='m-1' label={dic_article.tag[0]} style={{ cursor: 'pointer' }} /> : ""}

            <Chip icon={<TodayIcon fontSize='small' />} color="grey" className='m-1' label={dic_article.tag[1]} style={{ cursor: 'pointer' }} />
          </div>
          <p className="m-0 py-1" style={{ color: 'black' }}> {dic_article.description} </p>
        </div>

      </div>
    </div>
  )
}

class LandingPageArticle extends React.Component {

  render() {

    return (
      <div className='container-page' >

        <div>  </div>
        <div> <Link to="/"> {getArticle(dic_article[3], ImgBoilerplateAWS, ImgRoyaumeUni)} </Link> </div>
        <div> <Link to="/article/impact-du-covid-sur-immobilier"> {getArticle(dic_article[2], ImgImmo, ImgFrance)} </Link> </div>
        <div> <Link to="/article/deploy-webapp-on-aws"> {getArticle(dic_article[1], ImgDeployAWS, ImgRoyaumeUni)} </Link> </div>
        <div> <Link to="/ConstructionIndexFund.html" target="_blank" rel="noopener noreferrer"> {getArticle(dic_article[0], ImgIndexFund, ImgRoyaumeUni)} </Link> </div>
      </div>
    );
  }
}

export default LandingPageArticle;
