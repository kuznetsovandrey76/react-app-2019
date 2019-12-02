import React from "react";
import Post from './Post/Post'

const Posts = () => {

    const posts = [
        {title: 'first', text: '...'},
        {title: 'second', text: '...'},
        {title: 'third', text: '...'}
    ]

    return (
        <div className='posts'>
            <p>Posts</p>
            {posts.map((item) => {                
                return <Post title={item.title} text={item.text} />
            })}
        </div>
    )
}

export default Posts;