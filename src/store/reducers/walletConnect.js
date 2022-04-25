import {SET_LOGIN_INFO} from "../constants/walletConnect";
import {combineReducers} from "redux";

const loginInfo = (state = {
    value: {},
    error: {
        message: ''
    },
}, {
   type,
   data,
}) => {
    switch (type) {
        case SET_LOGIN_INFO:
            return {
                ...state,
                value: data.value,
                // encryptedSeed: data.encryptedSeed,
                error: {
                    ...state.error,
                    message: data.error.message,
                },
            };
        // case SIGN_IN_ADDRESS_MODAL_HIDE:
        //     return {
        //         ...state,
        //         loggedIn: false,
        //         encryptedSeed: false,
        //         error: {
        //             ...state.error,
        //             message: '',
        //         },
        //     };
        default:
            return state;
    }
}

export default combineReducers({
    loginInfo,
});
