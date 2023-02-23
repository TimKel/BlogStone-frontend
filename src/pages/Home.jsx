import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import BlogStoneApi from '../api/api';

const Home = () => {
    const [posts, setPosts] = useState([]);

    const cat = useLocation().search;

    useEffect(function getPostsOnMount() {
        // console.debug("All Posts List useEffect getPostsOnMount");
        search();
    }, [cat]);

    async function search(){

        if(!cat){
            let posts = await BlogStoneApi.getAllPosts();
            setPosts(posts)
        }else{
            let posts = await BlogStoneApi.getPostsByCat(cat);
            setPosts(posts);
        }
    }

  return (
    <div className="home">
            {posts.length
                ? (
                    <div className="posts">
                        {posts.map(post => (
                            <div className="post" key={post.id}>
                                <div className="img">
                                    <img src={post.img} alt="" />
                                </div>
                                <div className="content">
                                    <Link className="link" to={`/post/${post.id}`}>
                                    <h2>{post.title}</h2>
                                    </Link>
                                    <p>{post.content}</p>
                                    <Link className="link" to={`/post/${post.id}`}>
                                    <button>Read More</button>
                                    </Link>
                                </div>
                            </div>
                    
                        ))}
                    </div>
                    
                ) : (
                    <div>
                    <p id="noCat">Sorry, no posts found under this category</p>
                    <p id="noCat1">You know what to do! Write something great.</p>
                    </div>
                )}
           
        </div>
  )
}

export default Home