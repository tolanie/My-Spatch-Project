import React, { Fragment, useState } from 'react';
import ActionButtion from "../components/Actionbutton";
import AppButtion from "../components/Appbutton";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <div className="header">
            <div className='navbar'>
                <h1 className={isMobile ? 'logo' : 'logo-main'}>spatch </h1>
                <ul
                    className={isMobile ? "nav-links-mobile" : "nav-links"}
                    onClick={() => setIsMobile(false)}
                >
                    <li><a href="#about"></a>About</li>
                    <li><a href="#contact"></a>Contact</li>
                    <li className={isMobile ? "reg" : "reg-li"}><a href="#register"></a>Register</li>
                    <li className="request"><a href="#request"></a>Request</li>
                </ul>

                <div className={isMobile ? "connect" : "connect-us"}>
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
                    {isMobile ? (
                        <i class="fal fa-minus"></i>
                    ) : (
                        <i class="fas fa-plus"></i>
                    )}
                </button>

                <ActionButtion className={"btn-feswhite"} value={"Register"} />
            </div>

           
        </div>
    )
};

export default Header;