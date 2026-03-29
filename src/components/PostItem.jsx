import React from "react";
import { useNavigate } from "react-router-dom";

export default function PostItem(props) {
    const [value, setValue] = React.useState("Текст поста");
    const navigate = useNavigate();

    return (
        <div>
            <h1>{props.post.id} {props.post.title}</h1>
            <h2>{value}</h2>
            <div>{props.post.body}</div>
            <div>
                <button onClick={() => navigate(`/posts/${props.post.id}`)}>
                    Открыть
                </button>
            </div>
            <div>
                <button onClick={() => props.remove(props.post)}>
                    Удалить
                </button>
            </div>
        </div>
    );
}