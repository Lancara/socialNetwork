import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div>

            <div className={classes.col}>
                {props.message}
            </div>
        </div>
    );
};

export default Post;