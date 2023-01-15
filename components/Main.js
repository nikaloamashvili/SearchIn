import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { FaSearch, FaYandexInternational,FaPlus } from 'react-icons/fa';
import { IoMdArrowRoundBack } from "../node_modules/react-icons/Io"
// import { IoMdArrowRoundBack } from 'react-icons/Io';
import Search from './Search';
import React, { useEffect, useState } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Main(props) {

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
    // setSearchs(x=>{return [...x,{name:"Google",url:"https://www.google.com/search?q=",conector6:" "}]});
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
    fetch("http://localhost:5000/getSearch", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.data.length==0){
          setDB(window.localStorage.getItem("email"),"Google","https://www.google.com/search?q="," ");
          setDB(window.localStorage.getItem("email"),"Youtube","https://www.youtube.com/results?search_query=","+");
          setDB(window.localStorage.getItem("email"),"Translate","https://translate.google.co.il/?sl=iw&tl=en&text="," ");

        }else{
          setSearchs(data.data)

        }
        // this.setState({ userData: data.data });
      });
  }

  function delDB(name){
    fetch("http://localhost:5000/deleteSearch", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // setSearchs(data.data)
        // this.setState({ userData: data.data });
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
    // e.preventDefault();
    // const { fname, lname, email, password } = this.state;
    fetch("http://localhost:5000/addSearch", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        name,
        url,
        conector,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "search added!");
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
            <button className="btn-search" onClick={logic} > <FaSearch/> </button>
            <input type="text" className="input-search" placeholder="Type to Search..." onChange={handleSearchStringChange} onKeyPress={onKeyUp}></input>
        </div>
        <div className="choose">
      <form className="choose1" onChange={onChangeValue} >
        {!(searchElements==undefined)?searchElements:<h1>error</h1>}
        <div className="add">
    <buttom onClick={addSherch}><FaPlus/></buttom>
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
    <button ><FaPlus/></button>
    </div>

    <div className="exit" onClick={exit} title="Go back">
    <button ><IoMdArrowRoundBack/></button>
    </div>
    </div>

    </div>
  )
}
