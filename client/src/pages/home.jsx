import React, { useEffect, useState } from "react";
import "../styles/home.css"
import Header from "../components/header.jsx"
import Posts from "../components/Posts.jsx"
import SideBar from "../components/Sidebar.jsx"
import "../styles/home.css"
import axios from "axios"; 
import { useLocation } from "react-router-dom";

export default function Home(){
  const [posts,setPosts] = useState([]);
  const {search} = useLocation();


  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts" + search)
      setPosts(res.data)
    }
    fetchPosts();
  },[search]);
  return (
    <>
      <Header/>
    <div className="home">
      <Posts posts={posts}/>
      <SideBar/>
    </div>

    </>
  );
}
