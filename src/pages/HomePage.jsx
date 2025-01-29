import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from '../assets/recipe.jpg';
const HomePage = () => {
    return (
        
        <div id="homepage">
            <img src={BackgroundImage} alt="Background" id="backgroundimage" />
            <h1>"Where every recipe finds its perfect place—organize, cook, and savor!"</h1>
            <Link to="/categories" id="viewcategoriesbutton">View Categories</Link>
        </div>  
    );
};

export default HomePage;
