import React from "react";
// import ToAddress from "./ToAddress";
import ButtonStake from "./ButtonStake";
import From from "./From";
import To from "./To";
import Icon from "../../components/Icon";

const Stake = () => {

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
                        <ButtonStake/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Stake;
