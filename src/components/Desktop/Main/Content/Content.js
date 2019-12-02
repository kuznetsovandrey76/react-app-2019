import React from "react";
import Posts from './Posts/Posts'

const Content = ({ name }) => {
    return (
        <div className='content'>
            <Posts />
        </div>
    )
}

export default Content;