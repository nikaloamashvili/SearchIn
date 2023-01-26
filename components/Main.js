import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Search from './Search';

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUndo,
    faPlus,
    faSearch
  } from "@fortawesome/free-solid-svg-icons";


const inter = Inter({ subsets: ['latin'] })

export default function Main(props) {

  const myBE="https://63c69e4d7bc13e30efe4278c--searchinbackend.netlify.app"
  const [add, setAdd] = React.useState(false);
  const [searchs, setSearchs] = React.useState([])
  let searchElements;
  let searchString ="";
  let searchChoice= "";
  let name="";
  let searchUrl="";
 


  function handleSearchStringChange(event) {
    searchString=(event.target.value);
  }

  function onChangeValue(event) {
    searchChoice=(event.target.value);
  }

  function handleAddName(event) {
     name=(event.target.value);
  }

  function handleAddurl(event) {
     searchUrl=(event.target.value);
  }

  function onKeyUp(event) {
    if (event.charCode === 13) {
      logic();
    }
}
  
   function logic(){
    if(searchChoice==""){
            alert("you need to check a where you want to search")
    }else{
      for(let k=0;k<searchs.length;k++){
        if(searchs[k].name==searchChoice){
  if(searchs[k].conector6=="+"){
    let bstr = searchs[k].url;
    const words = searchString.split(' ');
    for (let i = 0; i < words.length; i++) {
      let result = "";
      result = bstr.concat("+", words[i]);
      bstr = result;
    }
    window.open(bstr, '_blank');
  }else{
          window.open(searchs[k].url + searchString, '_blank');
  }
        }
      }
    }
   }

  React.useEffect(()=>{
    setSearchs([]);
  if(props.isLoggedIn){
    getaDB();
  }else{

    setSearchs(x=>{return [...x,{name:"Google",url:"https://www.google.com/search?q=",conector6:" "}]});
    setSearchs(x=>{return [...x,{name:"Youtube",url:"https://www.youtube.com/results?search_query=",conector6:"+"}]});
    setSearchs(x=>{return[...x,{name:"Translate",url:"https://translate.google.co.il/?sl=iw&tl=en&text=",conector6:" "}]});
  }}, [props.isLoggedIn])


  if(!(searchs.length==undefined)){
     searchElements = searchs.map(search => (
      <Search id={search.name} fun={removeElement} />
    ))
  
  }else{
  
  }

  function getaDB(){
    fetch(myBE+"/.netlify/functions/getSearch", {
      method: "POST",
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    }).then((response) => {
      // *** Check for HTTP failure
      console.log(response)
      if (!response.ok) {
      throw new Error("HTTP status " + response.status);
      }
      // *** Read and parse the JSON                
      return response.json();
      })
      .then((res) => {
      // *** Use the object\

      console.log("sdaasmedas")
      if( res.data.length==0){
        setDB(window.localStorage.getItem("email"),"Google","https://www.google.com/search?q="," ");
        setDB(window.localStorage.getItem("email"),"Youtube","https://www.youtube.com/results?search_query=","+");
        setDB(window.localStorage.getItem("email"),"Translate","https://translate.google.co.il/?sl=iw&tl=en&text="," ");

      }else{
        setSearchs( JSON.parse(res.data))

      }
      })
      .catch((error) => {          
        console.log("error")
      });
  }

  function delDB(name){
    // fetch("http://localhost:5000/deleteSearch", {
      fetch(myBE+"/.netlify/functions/deleteSearch", {

      method: "POST",
      body: JSON.stringify({
        name      }),
    })
    .then((response) => {
      // *** Check for HTTP failure
      console.log(response)
      if (!response.ok) {
      throw new Error("HTTP status " + response.status);
      }
      // *** Read and parse the JSON                
      return response.json();
      })
      .then((res) => {
        alert("the search engine removed!")
      // *** Use the object\
          })
      .catch((error) => {          
        console.log("error")
      });
  }

  function removeElement(id){
    delDB(id)
    setSearchs(x=>{
      let rArray=[];
      for(let i=0;i<x.length;i++){
        if(x[i].name!=id){
          rArray.push(x[i])
        }
      }
      // localStorage.setItem("key",JSON.stringify(rArray))
      return rArray});
}

  function setDB(email,name,url,conector){
      console.log(email);
      console.log("top")
      fetch(myBE+"/.netlify/functions/addSearch", {
      method: "POST",
      body: JSON.stringify({
        email,
        name,
        url,
        conector,
      }),
    }).then((response) => {
      // *** Check for HTTP failure
      console.log(response)
      if (!response.ok) {
      throw new Error("HTTP status " + response.status);
      }
      // *** Read and parse the JSON                
      return response.json();
      })
      .then((res) => {
      // *** Use the object\

      alert("The engine was added!");

      })
      .catch((error) => {          
        console.log("error")
      });




  }

  function addSherch(){
    if(props.isLoggedIn){
      setAdd(true);
    }else{
      alert("To add search engines you must first log in.")
      window.location.href = "./SignIn";
    }
   }

   function exit(){
    setAdd(false);
   }

   function adds(){
    if(searchUrl=="" || name==""){
     alert("not vaild data")
    }else{
    let positionh = searchUrl.search("hello");
    let url= searchUrl.slice(0, positionh);
    let positionw = searchUrl.search("world");
    let conector=searchUrl.slice(positionh+5, positionw);

    if(positionh==-1){
     alert("we don't support this Sherch engine")
    }else{
      setDB(window.localStorage.getItem("email"),name,url,conector);
     setSearchs(x=>{
      //  localStorage.setItem("key",JSON.stringify([...x,{name:name,url:url,conector6:conector}]))
       return [...x,{name:name,url:url,conector6:conector}]});
     setAdd(false);
    }
 }
}


  return (
    (!add)?
   
    <div className='main'>
        {/* <h1>Main</h1> */}
        <div className="search-box">
            <button className="btn-search" onClick={logic} > <FontAwesomeIcon icon={faSearch} size="2x" color= "#00aced"  width={20} height={20}/></button>
            <input type="text" className="input-search" placeholder="Type to Search..." onChange={handleSearchStringChange} onKeyPress={onKeyUp}></input>
        </div>
        <div className="choose">
      <form className="choose1" onChange={onChangeValue} >
        {!(searchElements==undefined)?searchElements:<h1>error</h1>}
        <div className="add">
    <button1 onClick={addSherch}><FontAwesomeIcon icon={faPlus} size="2x" color= "#00aced"  width={20} height={20}/></button1>
    {/* {!props.isLoggedIn?
        <button className='help-b' onClick={handleShow}><span className='help-t'>?</span></button> 
:<></>} */}
    </div>
      </form>
    </div>
    </div>    
    :
    <div className="addPage">
    <h1>Add a shearch engine:</h1>
    <div className="aName">
    <span className="r1c1">Shearch engine name</span>
    <input 
                    type="text"
                    placeholder="Shearch engine name"
                    className="form--input"
                    name="name"
                    onChange={handleAddName}
                />
    </div>
    <div className="aUrl">
    <span  className="r1c2" title="Search for 'hello world' in the search engine you want to add and then paste the url you get here">Shearch engine "Hello World" Url</span>
                <input 
                    type="text"
                    placeholder="Url"
                    className="form--input"
                    name="url"
                    onChange={handleAddurl}
                />
      </div>
     <div className="addButtons">

    <div className="add2" onClick={adds} title="Add a shearch engine">
    <FontAwesomeIcon icon={faPlus} size="2x" color= "#00aced"  width={30} height={70}/>
    </div>

    <div className="exit" onClick={exit} title="Go back">
    <FontAwesomeIcon icon={faUndo} size="2x" color= "#00aced"  width={30} height={70}/>
    </div>
    </div>
    </div>
  )
}
