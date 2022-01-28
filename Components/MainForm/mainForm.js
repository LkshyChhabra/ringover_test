import React ,{useState} from 'react';
import '../../Css/main.scss';
import Tab from '../MainForm/tab';
import Content from '../MainForm/content';

var selected={video:false,
    calender:false,mail:false,flag:false,latest:-1}

    // let keys = Array.from( props.list.keys() );
    // let keys =[ ...selected.keys() ];

    
 function MainForm(props){

    // const [arr,setArr]=useState([]);

   

    
    //  Object.keys(props.list).map((a,b)=>{
    //     console.log(a);
    //     console.log(props.list[a]);

    //     if(props.list['latest']==b && !arr.includes(a)){
    //         arr.push(a)
    //         setArr(arr);
    //     }
    // })


    

    

    
    return(
        

        <div className="mainForm">
           
            <h1>mainForm</h1>
            {/* {props.list['latest']} */}
            {props.list['video'].toString()}
            {props.list['calender'].toString()}
            {props.list['mail'].toString()}
            {props.list['flag'].toString()}
            {
               props.list['latest'].map((p)=>{
                   return <Tab>{p}</Tab>
               }) 
            
            }
            {/* <Content/> */}

        </div>
    );
 }

 export default MainForm;