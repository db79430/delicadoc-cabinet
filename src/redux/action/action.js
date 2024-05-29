import {
    SET_AUTHENTICATED_USER,
    SET_INFO_PROMO,
    SET_RECOVERY_PASSWORD,
    SET_REGISTRATION_USER, SET_USER_INFO,
    SET_WEEK_INFO_PROMO
} from "../constant/constant";

export const setInfoPromo = (promoUsers) => ({
    type: "SET_INFO_PROMO",
    promoUsers
});

export const setRegistrationUser = (user) => ({
    type: "SET_REGISTRATION_USER",
    user

})

export const setUserAuthenticated = (user) => ({
    type: "SET_AUTHENTICATED_USER",
    user

})

export const setUserRecoveryPassword = (email_phone) => ({
    type: "SET_RECOVERY_PASSWORD",
    email_phone

})


export const setWeekIngoPromo = (week_day) => ({
    type: "SET_WEEK_INFO_PROMO",
    week_day
})

export const setUserInfo = (user_data) => ({
    type: "SET_USER_INFO",
    user_data
})

export const setUserToken = (token) => ({
    type: 'SET_USER_TOKEN',
    token
});

export const setChecks = (checks) => ({
    type: 'SET_CHECKS',
    checks
});