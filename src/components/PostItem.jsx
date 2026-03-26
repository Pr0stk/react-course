import React from "react";


export default function PostItem(props) {
    const [value, setValue] = React.useState("Текст поста");

  return (
    <div>
        <h1>{props.post.title}</h1>
        <h1>{value}</h1>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}