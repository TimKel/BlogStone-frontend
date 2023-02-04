import React, {useState, useEffect, useContext} from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import Edit from "../img/pencil.png"
import Delete from "../img/delete.png"
import Menu from './Menu'
import BlogStoneApi from '../api/api'
import moment from "moment";
import UserContext from '../common/UserContext'
import Alert from '../common/Alert'


const Single = () => {
    const [post, setPost] = useState({});

    const location = useLocation();
    const navigate = useNavigate();

    const id = location.pathname.split("/")[2]

    const { currentUser } = useContext(UserContext)
    console.log("CURRENTUSER", currentUser);

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

    const handleDelete = async () => {
        try{
            const res = await BlogStoneApi.removePost(id)
            Alert("Your Post has been deleted.")
            navigate('/');
        } catch(err){
            console.log(err);
        }
    }
    
  return (
    <div className="single">
        <div className="content">
            <img src={post.img}></img>
            <div className="user">
                {post.userImg && (
                    <img src={post.userImg} alt="user image" />
                )}
                <div className="info">
                    <span>{post.username}</span>
                    <p>Posted {moment(post.date).fromNow()}</p>
                </div>
                {currentUser.username === post.username && (
                    <div className="edit">
                    <Link to={`/write?edit=2`}>
                    <img src={Edit} alt="" />
                    </Link>
                    <img onClick={handleDelete} src={Delete} alt="" />
                    </div>
                )}   
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
