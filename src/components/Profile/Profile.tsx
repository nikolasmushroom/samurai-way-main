import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.img}>
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/009/871/929/small_2x/abstract-wave-blue-background-free-vector.jpg"
                    alt="backg"/>
            </div>

            <div>
                ava + des
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;