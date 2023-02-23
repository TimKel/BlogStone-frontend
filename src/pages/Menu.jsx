import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom';
import BlogStoneApi from '../api/api';

const Menu = ({cat}) => {
    const [posts, setPosts] = useState([]);

    const location = useLocation();

    useEffect(function getPostsOnMount() {
        console.debug("Menu-PostbyCat useEffect getPostsOnMount");
        search();
    }, []);

    async function search(){

        try{
            let posts = await BlogStoneApi.getAllPosts();
            setPosts(posts);
        } catch(err){
            console.log(err)
        }
    }
    
  return (
    <div className="menu">
        <h1>Other posts you may like</h1>
        {posts.map(post=>(
            <div className="post" key={post.id}>
                <Link className="link" to={`/post/${post.id}`}>
                <img src={post.img} alt="" />
                </Link>
                <Link className="link" to={`/post/${post.id}`}>
                <h2>{post.title}</h2>
                </Link>
                <Link className="link" to={`/post/${post.id}`}>
                <button>Read More</button>
                </Link>
            </div>
        ))}
    </div>
  )
}

export default Menu