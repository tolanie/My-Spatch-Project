import React from 'react'

import Storebutton from "../components/storebutton";


function Footer() {
    return (
        <div>
            
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
}

export default Footer;
