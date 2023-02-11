import React, { useState, useContext, useEffect } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import BlogStoneApi from '../api/api';
import { useLocation, useNavigate } from 'react-router-dom';
import UserContext from '../common/UserContext';

const UpdatePost = () => {
    const [post, setPost] = useState({})

    const location = useLocation();
    console.log(location)

    const state = useLocation().state

    const id = location.pathname.split("/")[2]

    // const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [img, setImg] = useState(null);
    const [cat, setCat] = useState(state?.cat || "");

    const { currentUser } = useContext(UserContext)
    console.log("CU", currentUser)
    const navigate = useNavigate();

    // const upload = async () => {
    //     try{
    //         const formData = new FormData();
    //         formData.append("img", img);
    //         const res = await axios.post("/upload", formData)
    //         console.log(res.data);
    //     }catch(err){
    //         console.log(err)
    //     }
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     upload();
    // }

    useEffect(function getPostsOnMount() {
        console.debug("All Posts List useEffect getPostsOnMount");
        search(id);
    }, []);

    async function search(){

        let post = await BlogStoneApi.getPost(id)
        console.log(post)
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
    
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        img: "",
        cat: "",
        user_id: currentUser.id
        
    })
    console.log(formData)

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await BlogStoneApi.updatePost(id, formData)
        console.log("RESREACT", res)
        if(res.success){
            navigate("/")
        }
    }

    const handleChange = async (e) => {
        const { name, value } = e.target;
        console.log(e.target.value)
        setFormData(data => ({...data, [name]: value}));
    }

    
  return (
    <div className="add">
        <div className="content">
            <input type="text" placeholder={post.title} name="title" onChange={handleChange} />
            <input type="text" placeholder={post.img} name="img" onChange={handleChange} />
            <textarea className="editorContainer" type="text-area" name="content" onChange={handleChange} placeholder={post.content} />
            {/* <div className="editorContainer">
                <ReactQuill className="editor" theme="snow" name="content" value={value} onChange={setValue} />
            </div> */}
        </div>
        <div className="menu">
            <div className="item">
                <h1>Publish</h1>
                <span>
                    <b>Status:</b> Draft
                </span>
                <span>
                    <b>Visibility:</b> Public
                </span>
                {/* <input style={{display:"none"}} type="file" id="file" onChange={e=>setImg(e.target.file[0])} />
                <label className="file" htmlFor="file">Upload Image</label> */}
                <div className="buttons">
                    <button>Save as Draft</button>
                    <button onClick={handleSubmit} >Publish</button>
                </div>
            </div>
            <div className="item">
                <h1>Category</h1>
                <div className="cat">
                    <input type="radio" checked={post.cat === "art"} name="cat" value="art" id="art" onChange={handleChange} />
                    <label htmlFor="art">Art</label>
                </div>
                <div className="cat">
                    <input type="radio" checked={post.cat === "science"} name="cat" value="science" id="science" onChange={handleChange} />
                    <label htmlFor="science">Science</label>
                </div>
                <div className="cat">
                    <input type="radio" checked={post.cat === "technology"} name="cat" value="technology" id="technology" onChange={handleChange} />
                    <label htmlFor="technology">Technology</label>
                </div>
                <div className="cat">
                    <input type="radio" checked={post.cat === "cinema"} name="cat" value="cinema" id="cinema" onChange={handleChange} />
                    <label htmlFor="cinema">Cinema</label>
                </div>
                <div className="cat">
                    <input type="radio" checked={post.cat === "design"} name="cat" value="design" id="design" onChange={handleChange} />
                    <label htmlFor="design">Design</label>
                </div> 
                <div className="cat">
                    <input type="radio" checked={post.cat === "food"} name="cat" value="food" id="food" onChange={handleChange} />
                    <label htmlFor="food">Food</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdatePost;