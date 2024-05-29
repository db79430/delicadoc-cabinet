import {combineReducers} from '@reduxjs/toolkit';
import {infoPromoReducer} from "./info-users-reducer";



const rootReducer = combineReducers({
    infoPromo: infoPromoReducer,
});
export default rootReducer;