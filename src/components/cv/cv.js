import React from 'react';
//import './css/aos.css';
import './css/bootstrap.min.css';
import './css/main.css';

import profil_picture from './images/anthony.jpg';
//import background_image from './images/cc-bg-1.jpg';
import background_image from './images/ocean.jpg';

class Cv extends React.Component {

    render() {
        return (
            <div className='container-page' >
                <header>
                    <div className="profile-page sidebar-collapse">
                        <nav className="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary" color-on-scroll="400">
                            <div className="container">
                                <div className="collapse navbar-collapse justify-content-end" id="navigation">
                                    <ul className="navbar-nav">
                                        <li className="nav-item"><a className="nav-link smooth-scroll" href="#about">About</a></li>
                                        <li className="nav-item"><a className="nav-link smooth-scroll" href="#skill">Skills</a></li>
                                        <li className="nav-item"><a className="nav-link smooth-scroll" href="#portfolio">Portfolio</a></li>
                                        <li className="nav-item"><a className="nav-link smooth-scroll" href="#experience">Experience</a></li>
                                        <li className="nav-item"><a className="nav-link smooth-scroll" href="#contact">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                <div className="page-content">
                </div>

                <div className="profile-page">
                    <div className="wrapper">
                        <div className="page-header page-header-small" filter-color="green">
                            <div className="page-header-image" data-parallax="true" style={{ backgroundImage: "url(" + background_image + ")" }}></div>
                            <div className="container">
                                <div className="content-center">
                                    <div className="cc-profile-image"><a href="#"><img src={profil_picture} alt="Image" /></a></div>
                                    <div className="h2 title">Louis JEANPIERRE</div>
                                    <p className="category text-white">Data Scientist full stack</p>
                                    <a className="btn btn-primary smooth-scroll mr-2" href="#contact" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Download CV</a>
                                    <a className="btn btn-primary" href="#" data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Linkedin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section" id="experience">
                    <div className="container cc-experience">
                        <div className="h4 text-center mb-4 title">Work Experience</div>
                        <div className="card">
                            <div className="row">
                                <div className="col-md-3 bg-primary" style={{ backgroundImage: "url('')" }} data-aos="fade-right"
                                    data-aos-offset="50" data-aos-duration="500">
                                    <div className="card-body cc-experience-header">
                                        <p>March 2016 - Present</p>
                                        <div className="h5">Sia Partners</div>
                                    </div>
                                </div>
                                <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                                    <div className="card-body">
                                        <div className="h5">Data science consultant</div>
                                        <p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis,
                                            tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend
                                            primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros
                                            .</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="row">
                                <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                                    <div className="card-body cc-experience-header">
                                        <p>April 2014 - March 2016</p>
                                        <div className="h5">WebNote</div>
                                    </div>
                                </div>
                                <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                                    <div className="card-body">
                                        <div className="h5">Web Developer</div>
                                        <p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis,
                                            tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend
                                            primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros
                                            pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium
                                            molestie ultricies sollicitudin dui.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="row">
                                <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                                    <div className="card-body cc-experience-header">
                                        <p>April 2013 - February 2014</p>
                                        <div className="h5">WEBM</div>
                                    </div>
                                </div>
                                <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                                    <div className="card-body">
                                        <div className="h5">Intern</div>
                                        <p>ui.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Cv;