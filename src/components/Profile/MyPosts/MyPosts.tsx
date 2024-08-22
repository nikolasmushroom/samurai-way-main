import React from "react";
import s from '../MyPosts/MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
            </div>

            <div>
                New posts
            </div>
            <div className={s.posts}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
)
}
