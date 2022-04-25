import {combineReducers} from 'redux';
import mobileSidebar from './sidebar';
import wallet from "./walletConnect";

const appReducer = combineReducers({
    mobileSidebar,
    wallet
});

export const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        return appReducer(undefined, action);
    }
    return appReducer(state, action);
};