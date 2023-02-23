import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API CLASS
 */

class BlogStoneApi {
    //the token for interaction with the API is stored here.
    static token;

    static async request(endpoint, data = {}, method = "get"){

        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${BlogStoneApi.token}` };
        const params = (method === "get")
            ? data
            : {};
        
        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message: [message];
        }
    }

    // Individual API routes

    //Get token for login from username, password

    static async login(data){
        let res = await this.request(`auth/token`, data, "post");
        return res.token;
    }

    // Sign up for site

    static async signup(data){
        let res = await this.request(`auth/register`, data, "post");
        return res.token;
    }

    //Save user profile page

    static async saveProfile(username, data){
        let res = await this.request(`users/${username}`, data, "patch");
        return res.user;
    }

    //Get the current user

    static async getCurrentUser(username){
        let res = await this.request(`users/${username}`);
        return res.user;
    }

    //POSTS

    //Get all posts
    static async getAllPosts(data){
        let res = await this.request("posts/", data, "get");
        return res.posts;
    }
    //Get all posts by single category
    static async getPostsByCat(cat, data){
        let res = await this.request(`posts${cat}`, data, "get");
        return res.postsByCat;
    }
    //Get a single post by id
    static async getPost(id, data){
        let res = await this.request(`posts/${id}`)
        return res.post
    }
    //Delete post permanently
    static async removePost(id, data){
        let res = await this.request(`posts/${id}`, data, "delete")
    }
    //Create a post
    static async addPost(data){
        let res = await this.request(`posts/`, data, "post")
        return res.post
    }
    //Update post
    static async updatePost(id, data){
        let res = await this.request(`posts/post/${id}/update`, data, "patch");
        return res.success;
    }
    //Get a single post information to be updated. Remove username to be patched in DB
    static async getUpdatePost(id, data){
        let res = await this.request(`posts/${id}`, data, "get")
        delete res.username
        return res.post
    }
}

export default BlogStoneApi;