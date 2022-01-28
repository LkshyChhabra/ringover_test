import React from 'react'
import '../Css/main.scss';
import Button from './button'

function onclick(){
    console.log("on click in called");
}
 function LeftNav(props){
    return(
        <div className="leftBar">
            <p>Jean Samuel Najundel</p>
            <p>President</p>
            <p>Ringover</p>
            <a>http://www.ringover.com</a>
            <hr/>
            <p>Topic</p>
            <p>Contact</p>
            <p>j.Najundel@ringover.com</p>
            <p>+33 07 55 35 23 21</p>
            <p>+33 07 55 35 45 65</p>
            <p>Additional</p>
            <p>president@ringover.com</p>
            <p>Francais</p>
            <p>www.youtube.com/ringover</p>
            Idian Startup (+5:30)
            <div className="flex">
                <Button onClick={onclick} text="a" onClick={()=>{
                    props.onClick(0)
                }}/>
                <Button onClick={onclick} text="b" onClick={()=>{
                    props.onClick(1)
                }}/>
                <Button onClick={onclick} text="c" onClick={()=>{
                    props.onClick(2)
                }}/>
                <Button onClick={onclick} text="d" onClick={()=>{
                    props.onClick(3)
                }}/>
            </div>
            

        </div>
    );
 }

 export default LeftNav;