import React from "react"
import PostItem from "./PostItem"

export default function PostList({posts, remove}) {
    if (!posts.length) {
        return (
            <div>
                <h1>No posts</h1>
            </div>
        )
    }
    return (
        <div>
            {posts.map(post => (
      <PostItem remove={remove} key={post.id} post={post} />
        ))}
        </div>
    )
}