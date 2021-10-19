import React, {useState} from "react";

import bg from '../img/BG.png';


import ActionButtion from "../components/Actionbutton";

import Storebutton from "../components/storebutton";

import AppButtion from "../components/Appbutton";

import ellipse from "../img/Ellipse.png";

import girly from "../img/girly.png";

import "./about.styles.scss";
import Header from "../components/Header";
import Bg from "../components/bg";
import Footer from "../components/Footer";

// import './style.css';


const About =()=> {
    const [isCheck, setIsCheck] = useState(false);
    return (
        <div className="container">
            <Header/>

        <div className="component">
        <div className="component-text">
        <h3 className="text-white text-5xl font-bold pt-8" >Solution Led.</h3>
        <h3 className="text-white text-5xl font-bold ">Technology driven.</h3>
        <p className="text-white pt-5 " >Providing reliable and sustainable logistic solutions.</p>
        <button className="bg-white py-3 px-6 mt-5 rounded-full">
            <p className="text-purple">Register with us</p>
        </button>
        <p className="its pt-5 text-white  "> Its all free no charges</p>
        </div>
        </div>

      <div className="cardd">
      <div className="bord">
        <ul>
            <li><a href="#">The Story</a></li>
            <li><a href="#">Our Values</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Driven by technology</a></li>
            <li><a href="#">working with our riders</a></li>
        </ul>
      </div>

        <div className="cardd-text">
        <p>Founded in 2020, with a technology platform and digital approach, Spatch was born to disrupt the traditional delivery chain model.</p>
        <p> Spatch understands what it takes to succeed in the rapidly changing digital world we operate in today. That’s why our positioning, predictive and product are so uniquely equipped to meet the transport and shipping demands of our generations.</p>
        <p>Agility, flexibility, reliability and service customization are part of our DNA. Joining the Spatch logistics family ensures a seamless brand experience throughout the customer journey. We take your business as ours. Your customer is our customer.</p>
        <p>   Spatch has you covered for all of your domestic or cross border shipments. Pickup, delivery and return services. Fast, efficient and customer-focused.</p>
        </div>
      </div>

      <div className="showmax">
          <div className="image">
          <div className="image-1" >
          <img src ={ellipse}/>
          </div>
          <div className="image-2" >
          <img src ={girly}/>
          </div>
          </div>

          <div className="work">
          <h4 className="font-bold text-3xl">Work anywhere,</h4>
          <h4 className="font-bold text-3xl">with any device</h4>
          <p className="w-24 mt-3 text-indigo">These companies release their own versions of the operating systems
             with minor changes, and yet always with the same bottom line. </p>
        <div className={ isCheck? "work-buttons" : "work-button"}>
        <Storebutton className={"buttons"} classStyle={"fab fa-apple"} text={"Available on"} title={"App Store"} />
        <Storebutton className={"button"} classStyle={"fab fa-google-play"} text={"Get it on"} title={"Google Play"} />
        </div>

        <div className={isCheck? "sec-work-buttons" : "sec-work-button"}>
        <button className="bg-purple py-3 px-6 mt-5 rounded-full">
            <p className="text-white">Get Started</p>
        </button>
        </div>

          </div>

      </div>
       
      <div className="f-box">
        <div className="f-box-1 bg-transparent rounded py-6 px-6">
        <i class="fas fa-bezier-curve text-purple bg-white rounded-full
         h-8 w-8 pl-2 pr-6 flex items-center justify-center. "></i>
        <h4 className="font-bold text-2xl pt-6" >Reliability</h4>
        <p className="w-16 mt-3 text-indigo">We don’t see clients. We see strategic, 
            long-term partners. You can rely on our
             professional team of Spatchers for all 
             your shipping needs. You sell. We deliver.</p>
        </div>

        <div className="f-box-1 bg-transparent rounded py-6 px-6">
        <i class="fas fa-bezier-curve text-purple bg-white rounded-full
         h-8 w-8 pl-2 pr-6 flex items-center justify-center."></i>
        <h4 className="font-bold text-2xl pt-6" >Flexibility</h4>
        <p className="w-16 mt-3 text-indigo">Spatch understands that every business 
        has different shipping requirements. One size certainly doesn’t fit all. 
        Flexibility is part of our business culture.</p>
        </div>

        <div className="f-box-1 bg-transparent rounded py-6 px-6">
        <i class="fas fa-bezier-curve text-purple bg-white rounded-full
         h-8 w-8 pl-2 pr-6 flex items-center justify-center."></i>
        <h4 className="font-bold text-2xl pt-6" >Invasion</h4>
        <p className="w-16 mt-3 text-indigo">Technology and people are the heart
         of Spatch’s innovation engine. We blend human touchpoints with advanced 
         technology to offer unrivalled customer experience.</p>
        </div>

      </div>

        <div className="we-cardd">
      <div className="we-card">
         <div className="we-card-header">
      <i class="fad fa-heart-circle text-5xl text-purple"></i>
        <h1 className=" pt-6 font-black ">Our guiding principles</h1>
             </div> 

        <div className="we-card-text " >

      <div className="we-card-1">
      <i class="fad fa-heart-circle text-3xl text-purple"></i>
        <h2 className="font-bold text-2xl pt-6" >We act as co-owners</h2>
        <p className="w-16 mt-2 text-indigo" >We are proud of what we have created.</p>
      </div>
      <div className="we-card-1">
      <i class="fad fa-heart-circle text-3xl text-purple"></i>
        <h2 className="font-bold text-2xl pt-6" >We trust, communicate</h2>
        <p className="w-16 mt-2 text-indigo" >We learn among ourselves.</p>
      </div>
      <div className="we-card-1">
      <i class="fad fa-heart-circle text-3xl text-purple"></i>
        <h2 className="font-bold text-2xl pt-6" >We produce impact</h2>
        <p className="w-16 mt-2 text-indigo" >We make our actions have positive value.</p>
      </div>       
        </div>
        </div>

        <div className="we-card-2" >
      <div className="we-card-1">
      <i class="fad fa-heart-circle text-3xl text-purple"></i>
        <h2 className="font-bold text-2xl pt-6" >We analyze and simplify</h2>
        <p className="w-16 mt-2 text-indigo" >We are efficient in solving problems.</p>
      </div>
      <div className="we-card-1">
      <i class="fad fa-heart-circle text-3xl text-purple"></i>
        <h2 className="font-bold text-2xl pt-6" >We innovate</h2>
        <p className="w-16 mt-2 text-indigo" >We know innovation requires evolusion.</p>
      </div>
      <div className="we-card-1">
      <i class="fad fa-heart-circle text-3xl text-purple"></i>
        <h2 className="font-bold text-2xl pt-6" >We improve our city</h2>
        <p className="w-16 mt-2 text-indigo" >We impact our enivironment in a positive way.</p>
      </div>
        </div>
      </div>

      <Bg/>
      <Footer/>

        </div>
    )
}

export default About;