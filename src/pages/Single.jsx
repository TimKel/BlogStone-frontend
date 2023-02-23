import React, {useState, useEffect, useContext} from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import Edit from "../img/pencil.png"
import Delete from "../img/delete.png"
import Menu from './Menu'
import BlogStoneApi from '../api/api'
import UserContext from '../common/UserContext'


const Single = () => {
    const [post, setPost] = useState({});

    const location = useLocation();
    const navigate = useNavigate();

    const id = location.pathname.split("/")[2]

    const { currentUser } = useContext(UserContext)

    useEffect(function getPostsOnMount() {
        console.debug("All Posts List useEffect getPostsOnMount");
        search();
    }, [id]);

    async function search(){
        let post = await BlogStoneApi.getPost(id)
        setPost(post)
    }

    const handleDelete = async () => {
        try{
            const res = await BlogStoneApi.removePost(id)
            navigate('/');
            alert(`Your post "${post.title}" has been deleted.`)
        } catch(err){
            console.log(err);
        }
    }
    
  return (
    <div className="single">
        <div className="content">
            <img src={post.img}></img>
            <div className="user">
                {post.profile_img && (
                    <img src={post.profile_img} alt="user image" />
                )}
                <div className="info">
                    <span>{post.username}</span>
                    <p>Posted {post.post_date}</p>
                </div>
                
                { currentUser && currentUser.username === post.username 
                    ?
                    <div className="edit">
                    <Link to={`/post/${id}/update`}>
                    <img src={Edit} className="edit-button" alt="" />
                    </Link>
                    <img onClick={handleDelete} src={Delete} className="delete-button" alt="" />
                    </div>
                    : null
                }  
               
            </div>
            <h1>{post.title}</h1>
            <p>
                {post.content}
            </p>
        </div>
        <Menu cat={post.cat} />
    </div>
  );
};

export default Single
