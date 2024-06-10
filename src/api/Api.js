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

export const botAxiosInstance = () => {
    return axios.create({
        baseURL: 'https://promo.develop-ogr.ru/api',
        withCredentials: false,
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
    async getInfoGiftPromo() {
        const axiosInstance = await getAxiosInstance();
        return axiosInstance.get('/promo/gift').then(response => response.data)
    },

    async getInfoPromo() {
        const axiosInstance = await getAxiosInstance();
        return axiosInstance.get('/promo').then(response => response.data)
    },

    async postRegistrationUser(newUser) {
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

    async postRecoveryPassword(data) {
        const axiosInstance = await getAxiosInstance();
        return axiosInstance.post(`/user/reset-password`, data).then(response => {
            return response
        })
    },

    async getUserInfo(token) {
        const axiosInstance = await getAxiosInstance();
        return axiosInstance.get(`/user/${token}`).then(response => {
            return response
        })
    },

    async postUpdateUser(userId) {
        const axiosInstance = await getAxiosInstance();
        return axiosInstance.post(`/user/${userId}`).then(response => {
            return response.data
        })
    },

    async postUpdatePointsUser(userId) {
        const axiosInstance = await getAxiosInstance();
        return axiosInstance.post(`/user/${userId}/set-points`).then(response => {
            return response.data
        })
    },

    async postSelectPointsUser(token) {
        const axiosInstance = await getAxiosInstance();
        try {
           return await axiosInstance.post(`/user/${token}/select-coupon`).then(response => {
               return response.data
           })
        } catch (error) {
            console.error("Ошибка при запросе на выбор купона:", error);
            throw error;
        }
    },

    async getGiftUser(token, data) {
        const axiosInstance = await getAxiosInstance();
        return axiosInstance.get(`/user/${token}/gift`).then(response => {
            return response.data
        })
    },

    async getChecksUser(token) {
        const axiosInstance = await getAxiosInstance();
        return axiosInstance.get(`/user/${token}/check`).then(response => {
            return response.data
        })
    },

}

export const apiBot = {
    async postUpdateCheckFoto(promo, token) {
        const axiosInstance = await botAxiosInstance();
        return axiosInstance.post(`/sending-check/photo/${promo}/${token}`).then(response => {
            return response.data
        })
    },

    async postUpdateCheckFields(promo, token, data) {
        const axiosInstance = await botAxiosInstance();
        return axiosInstance.post(`/sending-check/fields/${promo}/${token}`, data).then(response => {
            return response.data
        })
    },
}



