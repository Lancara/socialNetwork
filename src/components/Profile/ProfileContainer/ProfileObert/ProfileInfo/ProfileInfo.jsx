import React, {useState} from 'react';
import Infinity from "../../../../Common/Infinity/Infinity";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../../../assets/images/user.png";
import stile from '../../ProfileInfo.module.css'
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Infinity/>
    }


    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) { // если длина массива больше 0 то тру
            props.savePhoto(e.target.files[0]);// выз колбек
        }
    }
    const onSubmit = (formData) => {//  в formData сидят методы из сабмита которые он получает из библиотеки редакс-форм мы их прокидываем дальше в нашу компоненту
    props.saveProfile(formData) ;
    setEditMode(false);
    }

    return (
        <div>
            <div>
                <img src={props.profile.photos.large || userPhoto} className={stile.userPhoto}/>
                <div>{props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}</div>
                {editMode
                    ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={props.profile} isOwner={props.isOwner} />}

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <div>
            <b> Full name </b>: {profile.fullName}
        </div>
        <div>
            <b> Looking for a job </b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b> About me </b> : {profile.aboutMe}
        </div>
        <div>
            <b> Contacts </b> : {Object.keys(profile.contacts).map(key => {//Метод Object.keys() возвращает массив из собственных перечисляемых свойств, пробегаемся по ключам и мапим
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>// key={key} / contactTitle={key} и есть ключ, contacts[key] через квадратные скобки прочитали свойство
        })}
        </div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={stile.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;