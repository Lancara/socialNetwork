import React from 'react';
import {connect} from "react-redux";
import {getStatus, getUsersProfile, savePhoto, saveProfile, updateStatus} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import ProfileObert from "./ProfileObert/ProfileObert";

class ProfileBossContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId; // метод позволяющий получить userId использ withRouter
        if (!userId) {
            userId = this.props.authorizedUserId;
            /*if (!userId) {
                this.props.history.push("login"); // history.push позволяет перебрасивать на другую страницу
            }*/
        }
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <div>
                <ProfileObert {...this.props}
                    isOwner={!this.props.match.params.userId}// определили id и передали в ProfileInfoБ там если находимся на странице без юрл (значит на своей) добавили инпут и добав файл
                              profile={this.props.profile}
                              status={this.props.status}
                              updateStatus={this.props.updateStatus}
                              savePhoto={this.props.savePhoto}/>
            </div>
        );
    };
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, {getUsersProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
)(ProfileBossContainer)

/*
let AuthRedirectComponent = withAuthRedirect(ProfileBossContainer);// это хок
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {getUsersProfile}) (WithUrlDataContainerComponent);*/
