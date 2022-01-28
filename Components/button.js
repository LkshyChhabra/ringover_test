import React from 'react'
import '../Css/main.scss';
 function Button(props){
    return(
        <div className="button" onClick={props.onClick}>
            <p>{props.text}</p>
        </div>
    );
 }

 export default Button;