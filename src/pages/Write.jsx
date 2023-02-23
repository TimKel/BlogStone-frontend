import React, { useState, useContext } from 'react'
import 'react-quill/dist/quill.snow.css';
import BlogStoneApi from '../api/api';
import { useNavigate, Link } from 'react-router-dom';
import UserContext from '../common/UserContext';
import { post } from 'superagent';

const Write = () => {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        img: "",
        cat: "",
        user_id: ""
    })
    
    const { currentUser } = useContext(UserContext)
    const navigate = useNavigate();
    
    const handleChange = async (e) => {
        const { name, value } = e.target;
        setFormData(data => ({...data, [name]: value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        formData.user_id = currentUser.id

        let res = await BlogStoneApi.addPost(formData)
        if(res){
            alert(`Post with title "${res.title}" successfully created.`)
            navigate(`/post/${res.id}`)
        }
    }
    
  return (
    <div className="add">
        <div className="content">
            <input type="text" placeholder="Title" value={formData.title} name="title" onChange={handleChange} required />
            <input type="text" placeholder="Image URL, if left blank a random image is generated" value={formData.img} name="img" onChange={handleChange} required />
            <textarea className="editorContainer" type="text-area" value={formData.content} name="content" onChange={handleChange} placeholder="Blog description goes here..." required />
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
                <div className="buttons">
                    
                    <Link to={`/posts/${post.id}`}>
                    <button onClick={handleSubmit} >Publish</button>
                    </Link>
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