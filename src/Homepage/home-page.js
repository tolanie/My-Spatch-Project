import React from "react";

import  request  from '../img/request.jpg'

import './home-page.styles.scss';

function Home () {
    return(
        <div className="component">
            <div className="header">
            <div className='navbar'>
                    <h1 className='logo'>spatch </h1>
                    <ul>
                        <li><a href="#about"></a>About</li>
                        <li><a href="#contact"></a>Contact</li>
                        <li><a href="#request"></a>Request</li>
                    </ul>
                    <input type="submit" value={"Register"} className={"btn-feswhite"} />
                </div>

                <div className="section">
                    <h3>Providing reliable and smart logic solutions.</h3>
                    <p>Just as you take pride in leading your market we 
                        take pride in giving you unparralled dilivery services</p>
                     <input type="submit" value={"Register with us"} className={"btn-secwhite"} />
                     <p className="its"> Its all free no charges</p> 
                </div>
        <img src={request} alt="" />
            </div>

        <div className="content">
            
        </div>
        </div>
    )
};

export default Home;