import React from "react"
import { CiCircleRemove } from 'react-icons/Ci';

export default function Search(props){
    
    return(
        <div className="shearch" >
        <input type="radio" id={props.id} name="fav_language" value={props.id}></input>
        <label for={props.id} className="shearcha">{props.id}</label><br/>
        <div className="shearchb" onClick={()=>props.fun(props.id)}><CiCircleRemove/></div>
        </div>
    )
}