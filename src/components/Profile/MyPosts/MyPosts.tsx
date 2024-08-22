import React, {useState} from "react";
import s from '../MyPosts/MyPosts.module.css'
import {Post, PostPropsType} from "./Post/Post";

export const MyPosts = () => {
    const [currentPosts, setCurrentPosts] = useState<Array<PostPropsType>>([
        {message: 'hello world'},
        {message: 'Hello Dasha'},
        {message: 'Privet Andrey'}
    ])
    return (
        <div>
            <div>
                My posts
            </div>
            <input/><button>Add new post</button>
            <div>
                New posts
            </div>
            <div className={s.posts}>
                {currentPosts.map((post) => <Post message={post.message}/>)}
            </div>
        </div>
)
}
