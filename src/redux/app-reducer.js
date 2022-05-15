import {authAPI} from "../api/api";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false, // инициализация
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
    }
    return state;
}

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccess());
    })
} // это все нужно для: пока  асинхронные операции не закончатся мы не чего не показывали пользователю (не было маргания страниц)

export default appReducer;