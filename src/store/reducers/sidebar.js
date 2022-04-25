import {combineReducers} from 'redux';
import {
    SHOW_MOBILE_SIDEBAR,
    HIDE_MOBILE_SIDEBAR
} from "../constants/sidebar";

const mobileSidebar = (state = false, {
    type,
}) => {
    switch (type) {
        case SHOW_MOBILE_SIDEBAR:
            return true;
        case HIDE_MOBILE_SIDEBAR:
            return false;
        default:
            return state;
    }
};

export default combineReducers({
  mobileSidebar
});
