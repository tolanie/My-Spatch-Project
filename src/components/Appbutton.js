import React, { Fragment } from 'react';


const AppButtion =({value, className})=>{
    return (
        <>
            <input type="submit" value={value} className={className} ></input>
        </>
    )
}
export default AppButtion;