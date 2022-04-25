import React from 'react';
import Button from "../../components/Button";

const ButtonUnStake = () => {
    const loginInfo = JSON.parse(localStorage.getItem("loginInfo"));

    return (
        loginInfo && loginInfo.loginToken ?
            <Button
                className="button button-primary"
                type="button"
                disable={false}
                value="Stake"
            />
            :
            <Button
                className="button button-disable button-not-connected"
                type="button"
                disable={false}
                value="Connect wallet"
            />

    );
};


export default ButtonUnStake;

