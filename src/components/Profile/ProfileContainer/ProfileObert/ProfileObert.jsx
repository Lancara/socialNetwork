import React from 'react';
import ProfileContainer from "./ProfileContainer/ProfileContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ProfileObert = (props) => {
    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         saveProfile={props.saveProfile}
                         updateStatus={props.updateStatus}/>
            <ProfileContainer />
        </div>
    );
};

export default ProfileObert;