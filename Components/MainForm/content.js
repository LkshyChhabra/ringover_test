import React from 'react'
import '../../Css/main.scss';

var contents=['Videos','Schedules','Mail - Invitation to Join','Mail - Compose'];

 function Content(props){


    return(
        <div className="content">
            {contents[props.selected]}


        </div>
    );
 }

 export default Content;