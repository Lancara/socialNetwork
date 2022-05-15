import React from 'react';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../../utils/validators/validators";
import {Textarea} from "../../../../Common/FormsControls/FormsControls";
import classes from "./Profile.module.css";

const  Profile = React.memo(props =>  {

    let postElements2 =
        props.posts.map(p => <div className={classes.postField}><Post key={p.id}  message={p.message}/></div>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }
    return (
        <div>
            <div>
                <p></p>
            </div>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div>
                {postElements2}
            </div>
        </div>
    );
});

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={classes.postField} name="newPostText" component={Textarea}
                validate={[required, maxLength10]} />
            </div>
            <div>
                <button className={classes.postButton}>Add post</button>
            </div>
            <div>

            </div>
        </form>
    )
}
let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);
export default Profile;