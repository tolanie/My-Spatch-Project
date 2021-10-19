import React from 'react'

import bg from '../img/BG.png';


function Bg() {
    return (
        
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
        
    )
}

export default Bg
