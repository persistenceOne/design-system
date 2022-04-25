import {SET_LOGIN_INFO} from "../constants/walletConnect";

export const setLoginInfo = (data) => {
    return {
        type: SET_LOGIN_INFO,
        data,
    };
};