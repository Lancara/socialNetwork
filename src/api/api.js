import axios from "axios";
import {savePhoto, saveProfile} from "../redux/profile-reducer";

const instance = axios.create({ // что бы сделать instance нужно исп axios.create ( instance это экземпляр axios)
    withCredentials: true, // благодаря withCredentials кука цепляется и сайт понимает кто мы
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7300fadf-18dd-428e-9d99-dcbb08c65b81"
    }
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {})
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('obsolete method, please profileAPI obj ')
        return profileAPI.getProfile(userId);
    }

}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile){
        return instance.put(`profile`, profile);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`, );
    },
    login(email, password, rememderMe = false, captcha = null) { // приходят єти данные и мы отправляем их на сервер
        return instance.post(`/auth/login`, {email, password, rememderMe, captcha} );
    },
    logout() { // delete должно без параметров
        return instance.delete(`/auth/login`);
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url` );
    }
}



