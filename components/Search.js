import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMinusCircle
  } from "@fortawesome/free-solid-svg-icons";
export default function Search(props){
    
    return(
        <div className="shearch" >
        <input type="radio" id={props.id} name="fav_language" value={props.id}></input>
        <label for={props.id} className="shearcha">{props.id}</label><br/>
        
        <div className="shearchb" onClick={()=>props.fun(props.id)}>
        <FontAwesomeIcon icon={faMinusCircle} size="2x" color= "#00aced"  width={30} height={30}/>
            </div>
        </div>
    )
}