// import logo from './logo.svg';
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

  
  function leftNavSelected(x){
    var arr=workspace['latest'];
    if(x==0 && !arr.includes('video')){
      arr.push('video')
  }
  else if(x==1 && !arr.includes('calender')){
      arr.push('calender')
  }
  else if(x==2 && !arr.includes('mail')){
      arr.push('mail')
  }
  else if(x==3 && !arr.includes('flag')){
      arr.push('flag')
  }

    switch(x){
      case 0 :

        setWorkspace((prevState)=>({
          ...prevState,
          video:true,
          latest:arr,
          ind:x
        }));
        break;
      case 1 :
        setWorkspace((prevState)=>({
          ...prevState,
          calender:true,
          latest:arr,
          ind:x
        }));
        break;
      case 2 :
        setWorkspace((prevState)=>({
          ...prevState,
          mail:true,
          latest:arr,
          ind:x
        }));
        break;
      case 3 :
        setWorkspace((prevState)=>({
          ...prevState,
          flag:true,
          latest:arr,
          ind:x
        }));
        break;
      
    }
    }

  

  return (
    <div className="homepage">
       <TopNav/>
       <div className="flex">
        <LeftBar onClick={leftNavSelected}/>
        <MainForm list={workspace}>{workspace["video"].toString()} fjd</MainForm>
        <RightBar/>
       </div>
       
    </div>
  );
}

export default App;
