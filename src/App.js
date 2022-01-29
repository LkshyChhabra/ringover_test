
import './App.css';
import './Css/main.scss';
import LeftBar from './Components/leftBar'
import TopNav from './Components/topNav'
import MainForm from './Components/MainForm/mainForm'
import RightBar from './Components/rightBar'
import { useState } from 'react';

var selected={video:false,
calender:false,mail:false,flag:false,latest:[],ind:-1}




function App() {

  const [workspace,setWorkspace]=useState(selected)

  function removeLogic(idx,arr){
        
        arr.splice(idx,1);
        
        var sel = (idx<=arr.length-1) ? arr[idx] : (idx-1>=0) ? arr[idx-1] : -1;
         var y=(sel!==-1) ? ((sel==='video') ? 0 : ((sel==='calender' ? 1 : ((sel==='mail' ? 2 :3  )))) ):-1;
        
        
        return y;
  }
  
  function leftNavSelected(x,op="add"){
    var arr=workspace['latest'];
    var y=x;
    var sel = x;
    
    
  if(x==0){
    if(!arr.includes('video') && op=="add"){
      
      arr.push('video');
    }else if(arr.includes('video') && op=="remove"){
      var idx=arr.indexOf('video');
      
      if(x !== -1){
        if(x===workspace['ind'])
        y=removeLogic(idx,arr);
        else{

          removeLogic(idx,arr);
          y=workspace['ind'];
        }
      } 
    }
  }else if(x==1){
    if(!arr.includes('calender') && op=="add"){
      
      arr.push('calender');
    }else if(arr.includes('calender') && op=="remove"){
      var idx=arr.indexOf('calender');
      
      if(x !== -1){
        if(x===workspace['ind'])
        y=removeLogic(idx,arr);
        else{

          removeLogic(idx,arr);
          y=workspace['ind'];
        }
      } 
    }
  }else if(x==2){
    if(!arr.includes('mail') && op=="add"){
      
      arr.push('mail');
    }else if(arr.includes('mail') && op=="remove"){
      var idx=arr.indexOf('mail');
      
      if(x !== -1){
        if(x===workspace['ind'])
        y=removeLogic(idx,arr);
        else{

          removeLogic(idx,arr)
          y=workspace['ind'];
        }
      } 
    }
  }else if(x==3){
    if(!arr.includes('flag') && op=="add"){
      
      arr.push('flag');
    }else if(arr.includes('flag') && op=="remove"){
      var idx=arr.indexOf('flag');
      
      if(x !== -1){
        if(x===workspace['ind'])
        y=removeLogic(idx,arr);
        else{

          removeLogic(idx,arr);
          y=workspace['ind'];
        }
      } 
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

    switch(x){
      case 0 :

        setWorkspace((prevState)=>({
          ...prevState,
          video:true,
          latest:arr,
          ind:y
        }));
        break;
      case 1 :
        setWorkspace((prevState)=>({
          ...prevState,
          calender:true,
          latest:arr,
          ind:y
        }));
        break;
      case 2 :
        setWorkspace((prevState)=>({
          ...prevState,
          mail:true,
          latest:arr,
          ind:y
        }));
        break;
      case 3 :
        setWorkspace((prevState)=>({
          ...prevState,
          flag:true,
          latest:arr,
          ind:y
        }));
        break;
      
    }
    }

  

  return (
    <div className="homepage">
       <TopNav/>
       <div className="flex">
        <LeftBar onClick={leftNavSelected}/>
        <MainForm list={workspace} onClick={leftNavSelected} >{workspace["video"].toString()} fjd</MainForm>
        <RightBar/>
       </div>
       
    </div>
  );
}

export default App;
