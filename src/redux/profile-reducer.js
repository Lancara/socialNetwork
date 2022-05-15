import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [],
    profile: null,
    status: '',
};

const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,// создоем stateCopy и копируем в него  state (поверхносно)
                newPostText: '',//затираем
                posts: [...state.posts, {id: 3, message: action.newPostText}]//создоем новый массив и забираем элементы с помощю ... из старого  массиваи добавляем нью пост
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}

        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}
    }
    return state;
}

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST, newPostText
    }
}
export const setUsersProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS, status
    }
}
export const deletePost = (postId) => {
    return {
        type: DELETE_POST, postId
    }
}
export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS, photos
    }
}

export const getUsersProfile = (userId) => (diapatch) => {
    userAPI.getProfile(userId).then(response => {
        diapatch(setUsersProfile(response.data));
    });
}


export const getStatus = (userId) => (diapatch) => {
    profileAPI.getStatus(userId).then(response => {
        diapatch(setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status) //мы статус закидываем на сервер, если он добавился прийдет ответ 0 и мы добавим его в стате
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}
export const savePhoto = (file) => async (dispatch) => {
    const response= await profileAPI.savePhoto(file);

            if (response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos));
            }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await profileAPI.saveProfile(profile);

            if (response.data.resultCode === 0) {
                dispatch(getUsersProfile(userId));
            }

}

export default ProfileReducer;