import {
    SET_AUTHENTICATED_USER, SET_CHECKS,
    SET_INFO_PROMO,
    SET_RECOVERY_PASSWORD,
    SET_REGISTRATION_USER, SET_USER_INFO, SET_USER_TOKEN,
    SET_WEEK_INFO_PROMO
} from "../constant/constant";


export const initialState = {
    promoUsers: [],
    user: null,
    user_data: {},
    week_day: [],
    email_phone: "",
    data: null,
    token: "",
    checks: []
};

export const infoPromoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INFO_PROMO:
            return {
                ...state,
                promoUsers: action.promoUsers
            };
        case SET_REGISTRATION_USER:
            return {
                ...state,
                user: action.user
            };
        case SET_AUTHENTICATED_USER:
            return {
                ...state,
                user: action.user
            };
        case SET_WEEK_INFO_PROMO:
            return {
                ...state,
                week_day: action.week_day
            };
        case SET_RECOVERY_PASSWORD:
            return {
                ...state,
                email_phone: action.email_phone
            };
        case SET_USER_INFO:
            return {
                ...state,
                user_data: action.user_data
            };
        case SET_USER_TOKEN:
            return {
                ...state,
                token: action.token
            };
        case SET_CHECKS:
            return  {
                ...state,
                checks: action.checks
            }
        default:
            return state;
    }
};

