import React, {useState} from "react";
import s from '../MyPosts/MyPosts.module.css'
import {Post, PostPropsType} from "./Post/Post";

export const MyPosts = () => {
    const [currentPosts, setCurrentPosts] = useState<Array<PostPropsType>>([])
    const [currentInput, setCurrentInput] = useState('')
    return (
        <div>
            <div>
                My posts
            </div>
            <input value={currentInput} onChange={(e) => (setCurrentInput(e.currentTarget.value))}/>
            <button onClick={() => setCurrentPosts([...currentPosts, { message: currentInput }])}>Add new post</button>
            <div>
                New posts
            </div>
            <div className={s.posts}>
                {currentPosts.map((post) => <Post message={post.message}/>)}
            </div>
        </div>
    )
}