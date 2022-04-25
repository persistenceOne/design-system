import React from "react";
import ButtonUnStake from "./ButtonUnStake";
import From from "./From";
import To from "./To";
import Icon from "../../components/Icon";

const UnStake = () => {

    return (
        <div className="send-container">
            <div className="form-section">
                <div className="stake-content content">
                    <p className="available-balance">Available: Connect wallet to view balance</p>
                    <From/>
                    <div className="swap-icon">
                        <div className="icon-box">
                            <Icon
                                icon="exchange-arrow"
                                viewClass="search"
                            />
                        </div>
                    </div>
                    <To/>
                    <div className="connect-button">
                        <ButtonUnStake/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default UnStake;
