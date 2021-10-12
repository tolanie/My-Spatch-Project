import React, { Fragment } from 'react';

const Storebutton = ({className, classStyle, text,  title}) =>{
    return(
        <div className={className}>
        <i class={classStyle} />
        <span>{text}</span>
        <p>{title}</p>
    </div>
    )
};

export default Storebutton