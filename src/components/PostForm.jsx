import MyButton from './UI/Button/MyButton.jsx';
import MyInput from './UI/Input/MyInput.jsx';
import React from "react";

export default function PostForm({create}) {
    const [post, setPost] = React.useState({ title: "", body: "" });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPosts = { ...post, id: Date.now()}
        create(newPosts);
        setPost({title: "", body: ""});
      }

    return (
        <form>
          <MyInput 
            type="text" 
            onChange={e => setPost({...post, title: e.target.value})}
            value={post.title} 
          />
          <MyInput 
            value = {post.body} 
            onChange={e => setPost({...post, body: e.target.value})} 
            type="text" 
          />
          <MyButton onClick = {addNewPost}>Создать</MyButton>
        </form>
    )
    
}