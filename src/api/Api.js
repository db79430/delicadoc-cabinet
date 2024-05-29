import axios from "axios";
import data from "bootstrap/js/src/dom/data";

export const getAxiosInstance = (site) => {
    return axios.create({
        baseURL: 'https://panel.promo.develop-ogr.ru/api-site',
        withCredentials: false,
        // methods: 'GET, POST, PUT, DELETE, OPTIONS',
        // allowedHeaders: 'Content-Type, Authorization',
        credentials: true,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'promo-host': 'site.promo.develop-ogr.ru'
        },
        crossDomain: true,
    })
}

export const apiWeb = {
    async getInfoGiftPromo()  {
        const axiosInstance = await getAxiosInstance();
        return axiosInstance.get('/promo/gift').then(response => response.data)
    },

    async getInfoPromo() {
        const axiosInstance = await getAxiosInstance();
        return axiosInstance.get('/promo').then(response => response.data)
    },

    async postRegistrationUser(newUser){
        const axiosInstance = await getAxiosInstance();
        return axiosInstance.post('/user/registration', newUser).then(response => response)
            .catch(error => {
                console.error('There was an error!', error);
                throw error;
            })
    },

     async postUserAuthenticated(data) {
    const axiosInstance = await getAxiosInstance();
        return axiosInstance.post(`/user/authenticated`, data).then(response => {
            return response.data
        })
    },

    async postRecoveryPassword(data){
        const axiosInstance = await getAxiosInstance();
        return axiosInstance.post(`/user/reset-password`, data).then(response => {
            return response
        })
    },

    async getUserInfo(token){
        const axiosInstance = await getAxiosInstance();
        return axiosInstance.get(`/user/${token}`).then(response => {
            return response.data
        })
    },

    async postUpdateUser(userId){
        const axiosInstance = await getAxiosInstance();
        return axiosInstance.post(`/user/${userId}`,).then(response => {
            return response.data
        })
    },

    async postUpdatePointsUser(userId){
        const axiosInstance = await getAxiosInstance();
        return axiosInstance.post(`/user/${userId}/set-points`,).then(response => {
            return response.data
        })
    },

    async postSelectPointsUser(userId){
        const axiosInstance = await getAxiosInstance();
        return axiosInstance.post(`/user/${userId}/select-coupon`,).then(response => {
            return response.data
        })
    },

    async getGiftUser(userId){
        const axiosInstance = await getAxiosInstance();
        return axiosInstance.get(`/user/${userId}/gift`,).then(response => {
            return response.data
        })
    },

    async getChecksUser(token){
        const axiosInstance = await getAxiosInstance();
        return axiosInstance.get(`/user/${token}/check`,).then(response => {
            return response.data
        })
    },

    async postUpdateCheckFoto(){
        const axiosInstance = await getAxiosInstance();
        return axiosInstance.post(`/api/sending-check/photo/`,).then(response => {
            return response.data
        })
    },

    async postUpdateCheckFields(){
        const axiosInstance = await getAxiosInstance();
        return axiosInstance.post(`/sending-check/fields/{{promo}}/{{user}}`,).then(response => {
            return response.data
        })
    },




}



