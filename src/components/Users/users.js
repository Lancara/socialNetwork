import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import Paginator from "../Paginator/Paginator";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, selectedPage, ...props}) => {
    return <div>

        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   selectedPage={selectedPage}
                   totalItemsCount={totalUsersCount}
                   pageSize={pageSize}/>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>///
                            {u.followed
                                ? <button disabled={props.followingInProgress
                                    .some(id => id === u.id)}
                                          onClick={() => {
                                              props.unfollow(u.id);
                                          }}>
                                    Unfollow</button>
                                : <button disabled={props.followingInProgress
                                    .some(id => id === u.id)}
                                          onClick={() => {
                                              props.follow(u.id);
                                          }}>
                                    Follow</button>}
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                            <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                    </span>
            </div>)
        }
    </div>
};
export default Users;