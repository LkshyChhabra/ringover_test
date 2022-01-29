import React ,{useState} from 'react';
import '../../Css/main.scss';
import Tab from '../MainForm/tab';
import Content from '../MainForm/content';


    
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
           
            <h4>mainForm</h4>
            

            <div className="tabs">
                {
                    props.list['latest'].map((p)=>{
                        return <Tab onClick={props.onClick}>{p}</Tab>
                    }) 
                }
            </div>
            <Content selected={props.list['ind']}/>

        </div>
    );
 }

 export default MainForm;