import React from 'react';
import {addPostActionCreator} from "../../../../../redux/profile-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";

let mapStateToProps = (state) => {

    return{
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        addPost:(newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const  ProfileContainer = connect(mapStateToProps, mapDispatchToProps) (Profile);

export default ProfileContainer;