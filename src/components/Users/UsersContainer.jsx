import React from 'react';
import {connect} from "react-redux";
import {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers} from "../../redux/users-reducer";
import Users from "./users";
import Infinity from '../Common/Infinity/Infinity';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getCurrentPage, getFollowingInProgress, getIsFetching,
    getPageSize, getTotalUsersCount} from "../../redux/users-selector";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Infinity/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   users={this.props.users}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        /*users: getUsers(state),*/ // сделал так ибо выскакивают проблемы с ренаймом ( у нас есть санка с таким иминем, от туда и проблемы )
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers }),
    withAuthRedirect
)(UsersContainer)
