import React, { Fragment } from 'react';


const ActionButtion =({value, className})=>{
    return (
        <>
            <input type="submit" value={value} className={className}></input>
        </>
    )
}
export default ActionButtion;