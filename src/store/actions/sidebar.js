import {
SHOW_MOBILE_SIDEBAR,
HIDE_MOBILE_SIDEBAR
} from "../constants/sidebar";

export const showMobileSidebar = () => {
    return {
        type: SHOW_MOBILE_SIDEBAR,
    };
};
export const hideMobileSidebar = (data) => {
    return {
        type: HIDE_MOBILE_SIDEBAR,
        data,
    };
};

