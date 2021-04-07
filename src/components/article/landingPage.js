import React from 'react';
import { Link } from "react-router-dom";

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TodayIcon from '@material-ui/icons/Today';
import Chip from '@material-ui/core/Chip';

import ImgImmo from '../article/img/img_immo-min.jpeg';
import ImgDeployAWS from '../article/img/deploy-aws/img-deploy-aws.jpg';

import ImgFrance from '../article/img/france.png';
import ImgRoyaumeUni from '../article/img/royaume-uni.png';


import dic_article from './list_article.js';

function getArticleOld(dic_article, LogoImg) {

    return (
      <div class="card mb-3 mx-auto" style={{"max-width": "900px", cursor: 'pointer', 'box-shadow': '0 0 30px 6px rgba(31, 51, 73, 0.10)'}}>
      <div class="row no-gutters">
        <div class="col-md-4" style={{backgroundColor:'grey'}}>
          <img src={LogoImg}  class="card-img img-article h-100" alt="image-article"></img>

        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h4 class="card-title">Impacts du Covid-19 sur le marché de l'immobilier </h4>
            <Chip className="m-1 mb-2 card-chip" label={'Immobilier'} /><Chip className="m-1 mb-2 card-chip" label={'Covid-19'} />
            <p class="card-text" style={{color:'grey'}}>
            Depuis le début de la crise Covid, les analyses se multiplient dans de nombreux domaines pour anticiper à quoi ressemblera “le monde d’après”.
            Le marché de l’immobilier est lui aussi affecté par la crise, et son futur apparaît aujourd’hui incertain.
            Sans prétendre prédire l’évolution du cours de ce marché, cet article vise à en expliquer les déterminants essentiels, et les principaux enjeux.
            </p>
            <p class="card-text">
            <small class="text-muted">
                <TodayIcon className="mb-1" fontSize='small' style={{height:'14px', 'color':'grey'}}/>Décembre 2020
                <span className='mx-2'>·</span>
                <AccessTimeIcon className="mb-1" fontSize='small' style={{height:'14px','color':'grey'}}/>10 minutes
            </small></p>
          </div>
        </div>
      </div>
      </div>
    )
  }

function getArticle(dic_article, LogoImg, LogoLang) {
  return (
    <div className='my-5' style={{maxWidth: "1130px", cursor: 'pointer', boxShadow: '0 0 30px 6px rgba(31, 51, 73, 0.10)', marginRight:'auto', marginLeft:'auto'}}>
      <div className="row m-0">

          <div className="container-img-article m-0" style={{backgroundColor:'grey'}}>
            <img src={LogoImg}  class="card-img img-article h-100" alt="image-article"></img>
          </div>

          <div className="container-resume-article m-0">
              <div className='d-flex'>
                <h3 className="card-title-article m-0" > {dic_article.title} </h3>
                <img src={LogoLang}  class='my-auto ml-auto' style={{height:'30px'}} alt="lang-flag"></img>

              </div>
              <div className="mb-1 mt-2">
              {dic_article.tag.map((tag) => (
                <Chip className='m-1' label={tag} style={{cursor: 'pointer'}} />
              ))}
              </div>
              <p className="m-0 py-1" style={{color:'black'}}> {dic_article.description} </p>
              <p className="my-2" style={{color:'grey'}}>
                <small>
                    <TodayIcon fontSize='small' style={{height:'14px', color:'grey'}}/>{dic_article.date}
                    <span className='mx-2'>·</span>
                    <AccessTimeIcon className="" fontSize='small' style={{height:'14px',color:'grey'}}/>{dic_article.time}
                </small>
              </p>
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
            <div> <Link to="/article/deploy-webapp-on-aws"> { getArticle(dic_article[1], ImgDeployAWS, ImgRoyaumeUni) } </Link> </div>
            <div> <Link to="/article/impact-du-covid-sur-immobilier"> { getArticle(dic_article[0], ImgImmo, ImgFrance) } </Link> </div>

        </div>
        );
    }
}

export default LandingPageArticle;
