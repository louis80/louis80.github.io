import React from 'react';
import { Link } from "react-router-dom";


class LandingPageArticle extends React.Component {

    render() {
        return (
        <div className='container-page' >

            <div> LandingPageArticle </div>

            <div>
                <Link to="/article/impact-du-covid-sur-immobilier"> Article   </Link> 
            </div>
            
            
        </div>
        );
    }
}

export default LandingPageArticle;