import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import BlogStoneApi from '../api/api';
import { useNavigate } from 'react-router-dom';

const Write = () => {
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [img, setImg] = useState(null);
    const [cat, setCat] = useState("null");

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

    const [formData, setFormData] = useState({
        title: "",
        content: value,
        img: "",
        cat: ""
        
    })
    console.log(formData)

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await BlogStoneApi.addPost(formData, value)
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
            <input type="text" placeholder="Title" name="title" onChange={handleChange} />
            <input type="text" placeholder="Image URL" name="img" onChange={handleChange} />
            <input className="editorContainer" type="text-area" name="content" onChange={handleChange} placeholder="Post content goes here..." />
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
                    <input type="radio" name="cat" value="art" id="art" onChange={handleChange} />
                    <label htmlFor="art">Art</label>
                </div>
                <div className="cat">
                    <input type="radio" name="cat" value="science" id="science" onChange={handleChange} />
                    <label htmlFor="science">Science</label>
                </div>
                <div className="cat">
                    <input type="radio" name="cat" value="technology" id="technology" onChange={handleChange} />
                    <label htmlFor="technology">Technology</label>
                </div>
                <div className="cat">
                    <input type="radio" name="cat" value="cinema" id="cinema" onChange={handleChange} />
                    <label htmlFor="cinema">Cinema</label>
                </div>
                <div className="cat">
                    <input type="radio" name="cat" value="design" id="design" onChange={handleChange} />
                    <label htmlFor="design">Design</label>
                </div> 
                <div className="cat">
                    <input type="radio" name="cat" value="food" id="food" onChange={handleChange} />
                    <label htmlFor="food">Food</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Write