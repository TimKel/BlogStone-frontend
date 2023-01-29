import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API CLASS
 */

class BlogStoneApi {
    //the token for interaction with the API is stored here.
    static token;

    static async request(endpoint, data = {}, method = "get"){
        console.debug("API Call:", endpoint, data, method);

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

    static async getAllPosts(data){
        let res = await this.request("posts/", data, "get");
        return res.posts;
    }
}

export default BlogStoneApi;