import React, {useState, useEffect} from 'react'
import { Link, useLocation } from "react-router-dom"
import Edit from "../img/pencil.png"
import Delete from "../img/delete.png"
import Menu from './Menu'
import BlogStoneApi from '../api/api'

const Single = () => {
    const [post, setPost] = useState({});

    const location = useLocation();

    const id = location.pathname.split("/")[2]

    // let cate = cat.split("=")
    // let cate1 = cate[1];
    // console.log("CATE", cate1);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try{
    //             const res = await axios.get(`/posts${cat}`);
    //             setPosts(posts);
    //         }catch (err) {
    //             console.log(err);
    //         }
    //     };
    //     fetchData();
    // }, [cat]);

    useEffect(function getPostsOnMount() {
        console.debug("All Posts List useEffect getPostsOnMount");
        search();
    }, [id]);

    async function search(){

        let post = await BlogStoneApi.getPost(id)
        setPost(post)

        // if(!cat){
        //     let posts = await BlogStoneApi.getAllPosts();
        //     // console.log("IM ALL POSTS")
        //     setPost(post)
        // }else{
        //     let posts = await BlogStoneApi.getPostsByCat(cat);
        //     console.log("POSTS", posts)
        //     console.log("CAT", cate1);
        //     setPost(post);
        // }
    }
  return (
    <div className="single">
        <div className="content">
            <img src={post.img}></img>
            <div className="user">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="user image" />
                <div className="info">
                    <span>{post.username}</span>
                    <p>Posted 2 Days ago</p>
                </div>
                <div className="edit">
                    <Link to={`/write?edit=2`}>
                    <img src={Edit} alt="" />
                    </Link>
                    <img src={Delete} alt="" />
                </div>   
            </div>
            <h1>{post.title}</h1>
            <p>
                {post.content}
            </p>
        
        </div>
        <Menu />
    </div>
  );
};

export default Single
