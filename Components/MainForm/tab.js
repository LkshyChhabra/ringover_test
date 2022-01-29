import React from 'react'
import '../../Css/main.scss';
import Button from '../button'
 function Tab(props){

    var selectedTab=-1;
    switch (props.children){
        case 'video':selectedTab=0; break;
        case 'calender':selectedTab=1; break;
        case 'mail':selectedTab=2; break;
        case 'flag':selectedTab=3; break;
    }

    return(
        <div className="tab">

            <h6 onClick={()=>{props.onClick(selectedTab)}}>{props.children}</h6>
            <Button text="x" onClick={()=>{
                props.onClick(selectedTab,"remove");
            }}/>
        </div>
    );
 }

 export default Tab;