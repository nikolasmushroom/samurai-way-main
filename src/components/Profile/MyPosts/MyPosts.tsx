import React, {KeyboardEvent, useState} from "react";
import s from '../MyPosts/MyPosts.module.css'
import {Post, PostPropsType} from "./Post/Post";
import classes from "./MyPosts.module.css";

export const MyPosts = () => {
    const [currentPosts, setCurrentPosts] = useState<Array<PostPropsType>>([])
    const [currentInput, setCurrentInput] = useState('')
    const addNewPost = () => {setCurrentPosts([...currentPosts, { message: currentInput }]); setCurrentInput('')};
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            setCurrentPosts([...currentPosts, { message: currentInput }])
            setCurrentInput('');
        }
    }
    return (
        <div>
            <div>
                My posts
            </div>
            <input className={classes.input} value={currentInput}
                   onChange={(e) => (setCurrentInput(e.currentTarget.value))}
                   onKeyDown={onKeyDownHandler}
            />
            <button onClick={addNewPost}>Add new post</button>
            <div>
                New posts
            </div>
            <div className={s.posts}>
                {currentPosts.map((post) => <Post message={post.message}/>)}
            </div>
        </div>
    )
}