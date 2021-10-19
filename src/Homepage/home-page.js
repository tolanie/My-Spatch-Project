import React, { useState } from "react";


import Storebutton from "../components/storebutton";

import AppButtion from "../components/Appbutton";


import devicep from '../img/devicep.jpg';

import group1 from '../img/Group1.png';

import girl1 from '../img/girl1.png';

import boh from '../img/boh.png';

import girl2 from '../img/girl2.png';

import girl3 from '../img/girl3.png';

import bg from '../img/BG.png';

import './home-page.styles.scss';
import Header from "../components/Header";
import request from '../img/request.jpg'
import Bg from "../components/bg";
import Footer from "../components/Footer";


function Home() {
   
    return (
        <div className="component">

            <Header/>
            < div className="show-max">
            <div className="section">
                <h3>Providing reliable and smart logic solutions.</h3>
                <p>Just as you take pride in leading your market we
                    take pride in giving you unparralled dilivery services</p>
                <AppButtion className={"btn-secwhite"} value={"Register with us"} />
                <p className="its"> Its all free no charges</p>
            </div>
            <img src={request} alt="" />
            </div>
            <div className="content"  >
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

                <div className="shaw" >
                {/* <div className={isMobile ? "show-d" : "show"}> */}

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
                    <br />
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

           <Bg/>

        <Footer/>



        </div>


    )


};

export default Home;