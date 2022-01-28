import React,{useState} from 'react'
import '../Css/main.scss';
import Button from './button'

var selected=0;
 var options=[
   "activities",
   "tasks",
   "Progress"
 ];

 function RightBar(props){

    const [selected,setSelected] = useState(0);

    
    return(

        <div className="rightBar">
            <div className="flex">
                <Button text="Activity" onClick={()=>{setSelected(0)}}/>
                <Button text="Task" onClick={()=>{setSelected(1)}}/>
                <Button text="Progress" onClick={()=>{setSelected(2)}}/>
            </div>
            <div className="rightNavContent">
                {options[selected]}
            </div>
        </div>
    );
 }

 export default RightBar;