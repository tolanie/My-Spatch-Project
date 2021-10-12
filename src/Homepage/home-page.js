import React, {useState} from "react";

import ActionButtion from "../components/Actionbutton";

import Storebutton from "../components/storebutton";

import AppButtion from "../components/Appbutton";

import  request  from '../img/request.jpg'

import devicep from '../img/devicep.jpg';

import group1 from '../img/Group1.png';

import girl1 from '../img/girl1.png';

import boh from '../img/boh.png';

import girl2 from '../img/girl2.png';

import girl3 from '../img/girl3.png';

import bg from '../img/BG.png';

import './home-page.styles.scss';

function Home () {
    const [isMobile, setIsMobile] = useState(false);
    return(
        <div className="component">
            <div className="header">
            <div className='navbar'>
                <h1 className={isMobile ? 'logo': 'logo-main' }>spatch </h1>
                    <ul 
                    className={isMobile ? "nav-links-mobile" : "nav-links"}
                    onClick={() => setIsMobile(false)}
                    >
                        <li><a href="#about"></a>About</li>
                        <li><a href="#contact"></a>Contact</li>
                    <li className={isMobile ? "reg" : "reg-li"}><a href="#register"></a>Register</li>
                        <li className="request"><a href="#request"></a>Request</li>
                    </ul>

                <div className={ isMobile ? "connect" : "connect-us"}>
            <span>Connect with us on social</span>

            <div className="end-icon">

            <div className="end-icons">
            <i class="fab fa-instagram icon"></i>
            </div>

            <div className="end-icons">
        <i class="fab fa-twitter icon"></i> 
            </div>

            <div className="end-icons">
        <i class="fab fa-invision icon"></i> 
            </div>

            <div className="end-icons">
            <i class="fab fa-facebook icon"></i>  
            </div>

            </div>
            </div>

                       <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                           {isMobile? (
                           <i class="fal fa-minus"></i>
                           ) : (
                           <i class="fas fa-plus"></i>
                           )}
                           </button>  

                    <ActionButtion className={"btn-feswhite"} value={"Register"} />
                </div>

                <div className="section">
                    <h3>Providing reliable and smart logic solutions.</h3>
                    <p>Just as you take pride in leading your market we 
                        take pride in giving you unparralled dilivery services</p>
                        <AppButtion className={"btn-secwhite"} value={"Register with us"} />
                     <p className="its"> Its all free no charges</p> 
                </div>
        <img src={request} alt="" />
            </div>

        <div className= "content"  >
            <h3>Trusted to deliver</h3>
            <p>Its simple. Concentrate on what you do best. We take care of the rest. </p>
            <p></p>
        </div>

        <div className="box">

        <div className=" dbox box-1">
        <i class="fas fa-comment-alt"></i>
         <h5>Customer Experience</h5>
        <p>We blend human support with functional design to offer a unique 360° customer experience.</p>
        </div>

        <div className=" dbox box-2">
        <i class="fas fa-bezier-curve"></i>
        <h5>Reliable and Efficient</h5>
        <p>Spatch is a smart logistics company that offers unparalleled efficiencies services.</p>
        </div>

        <div className=" dbox box-3">
        <i class="fas fa-square"></i>
        <h5>Scalable Solutions</h5>
        <p>We make sure your business deliveries needs are covered. Spatch tailors its service to match your requirements.</p>
        </div>

        <div className="dbox box-4">
        <i class="fad fa-user"></i>     
           <h5>Professional Spatcher</h5>
        <p>Spatch experienced drivers reflect the professional image that your customers expect from your business.</p>
        </div>

        </div>

        <div className="context">
        <div className="text">
        <h4>We simplify how you do delivery.</h4>
        <p>Booking your order made easy.Fully optimized for you and your business on the go. Clear and transparent prices.</p>
        <AppButtion className={"btn-secwhite"} value={"Register with us"} />
        </div>

        <img src={devicep} alt="" />

        </div>

        <div className="showcase">

            <div className="image">
        <img src={group1} alt="" />
            </div>

        <div className={isMobile? "show-d" : "show" }>

        <div className="case">
            <h4>Work anywhere,</h4>
            <h4>with any device</h4>
            <p>These companies release their own versions of the operating systems
             with minor changes, and yet always with the same bottom line. </p>
             </div>

        <Storebutton className={"buttons"} classStyle={"fab fa-apple"} text={"Available on"} title={"App Store"} />
        <Storebutton className={"button"} classStyle={"fab fa-google-play"} text={"Get it on"} title={"Google Play"} />

        </div>

        </div>


        <div className="say">
        <i class="fad fa-heart-circle"></i>
        <h2>
            What our customers 
            <br/>
            are saying about us.
        </h2>

        <div className="second-box" >

        <div className="box-5 option">
        <img src={girl1} alt="" />
        <p>I owe these guys my life. Already used their landing page templates for my latest two projects.</p>
        <span>@nifries</span>
        </div>

        <div className="box-6 option">
        <img src={boh} alt="" />
        <p>Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…</p>
        <span>@johnsmith</span>
        </div>

        <div className="box-7 option">
        <img src={girl2} alt="" />
        <p>I owe these guys my life. Already used their landing page templates for my latest two projects.</p>
        <span>@thetoyin</span>
        </div>

        <div className="box-8 option">
        <img src={girl3} alt="" />
        <p>I owe these guys my life. Already used their landing page templates for my latest two projects.</p>
        <span>@mariam</span>
        </div>


        </div>
        
        </div>

        <div className="bg">
        <img src={bg} alt="" />

        <div className="bg-text" >
        <h3>Manage your deliveries with spatch easily.</h3>
        <p>Time is the most precious thing you have when running
             your business. You can off the time to ponder on logistics.
             </p>
             <button className="btn-purple">
                 <p>Contact for support</p>
             </button>
        </div>
        </div>

        <div className="footer">
            <div className="third-box">

                <div className="card cardi card-1">
                <h2>spatch</h2>
                <p>We delivered over 20,000 jobs successfully since we started this journey.</p>
                </div>

                <div className="card cardi">
                <h4>Company</h4>
                <p>Company</p>
                <p>Blog</p>
                <p>Careers</p>
                <p>Contact</p>
                </div>

                <div className="card cardi ">
                <h4>Service</h4>
                <p>Same day</p>
                <p>International</p>
                <p>Express</p>
                <p>Buck Service</p>
                </div>

                <div className="card card-4 ">
                <h4>Download our app</h4>
                <Storebutton className={"buttons"} classStyle={"fab fa-apple"} text={"Available on"} title={"App Store"} />
                <Storebutton className={"button"} classStyle={"fab fa-google-play"} text={"Get it on"} title={"Google Play"} />         
                </div>
            </div>

            <div className="end">
            <p>&copy; spatch 2021, All Right Reserved</p>
            <span>Connect with us on social</span>

            <div className="end-icon">

            <div className="end-icons">
            <i class="fab fa-instagram icon"></i>
            </div>

            <div className="end-icons">
        <i class="fab fa-twitter icon"></i> 
            </div>

            <div className="end-icons">
        <i class="fab fa-invision icon"></i> 
            </div>

            <div className="end-icons">
            <i class="fab fa-facebook icon"></i>  
            </div>

            </div>
            

            </div>

        </div>

        

        </div>

        
    )

    
};

export default Home;