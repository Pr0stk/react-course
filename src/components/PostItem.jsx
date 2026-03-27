import React from "react";


export default function PostItem(props) {
    const [value, setValue] = React.useState("Текст поста");

  return (
    <div>
        <h1>{props.post.title}</h1>
        <h2>{value}</h2>
        <div>{props.post.body}</div>
        <div>
          <button onClick={() => props.remove(props.post)}>Удалить</button>
        </div>
    </div>
  );
}