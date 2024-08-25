import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.img}>
                <img
                    src=""
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