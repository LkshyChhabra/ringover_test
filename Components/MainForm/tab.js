import React from 'react'
import '../../Css/main.scss';
 function Tab(props){
    return(
        <div className="tab">

            <h1>{props.children}</h1>
        </div>
    );
 }

 export default Tab;