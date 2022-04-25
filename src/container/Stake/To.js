import React from "react";
import stkXprt from "../../assets/images/stk_xprt.svg";

const To = () => {
    return (
        <div className="input-field-container flex-fill">
            <div className="dropdown-input swap-next">
                <div className="input-logo">
                    <img src={stkXprt} className="logo" alt="cc"/>
                    stkXPRT
                </div>
                <div className="input-section">
                    <input
                        type="number"
                        placeholder="0.00"
                    />
                    <p className="dollar-amount">0.00 </p>
                </div>
            </div>
        </div>
    );
};


export default To;
