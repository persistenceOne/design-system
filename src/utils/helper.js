import _ from "lodash";
import moment from "moment";

export const removeCommas = str => _.replace(str, new RegExp(",", "g"), "");

export const localTime = (stringData) => {
    return moment(new Date(stringData).toString()).format('dddd MMMM Do YYYY, h:mm:ss a');
};

export const emptyFunc = () => ({});

export const stringToNumber = (stringData) => {
    return +stringData;
};

export const randomNum = (min, max) => {
    let randomNumbers = [];
    for (let i = 0; i < 3; i++) {
        let random_number = Math.floor(Math.random() * (max - min) + min);
        if (randomNumbers.indexOf(random_number) === -1) {
            randomNumbers.push(random_number);
        }
    }
    return randomNumbers;
};

export const stringTruncate = (str) => {
    if (str.length > 30) {
        return str.substr(0, 10) + '...' + str.substr(str.length - 10, str.length);
    }
    return str;
};

export const fileTypeCheck = (filePath) => {
    let allowedExtensions =
        /(\.json)$/i;
    return allowedExtensions.exec(filePath);
};

export const trimWhiteSpaces = (data) => {
    return data.split(' ').join('');
};

