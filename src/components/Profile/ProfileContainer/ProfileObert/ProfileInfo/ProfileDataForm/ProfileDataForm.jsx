import React from 'react';
import {createField, Input, Textarea} from "../../../../../Common/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";
import stile from '../../../ProfileInfo.module.css'


const ProfileDataForm = ({handleSubmit, profile}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button> save </button>
        </div>
        <div>
            <b> Full name </b>: {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b> Looking for a job </b>: {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>

        <div>
            <b>My professional skills</b>:
            {createField("My professional skills", "lookingForAJobDescription", [], Textarea,)}
        </div>

        <div>
            <b> About me </b> :
            {createField("About me", "aboutMe", [], Textarea,)}
        </div>
        <div>
            <b> Contacts </b> : {Object.keys(profile.contacts).map(key => {
            return <div className={stile.contact}>
                <b>{key} :  {createField(key, "contacts." + key, [], Input)} </b>
            </div>
        })}
        </div>
    </form>
}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;