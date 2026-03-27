import axios from "axios";

export default class PostService {
    static async getPosts(limit = 10, page = 1) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: {
            _limit: limit,
            _page: page,
        }
    });
        return response;
    }

    async createPost(post) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });
        return response.data;
    }

    async deletePost(post) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: "DELETE",
        });
        return response.data
    }
}