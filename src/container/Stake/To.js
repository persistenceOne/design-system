import React from "react";
import stkXprt from "../../assets/images/stk_xprt.svg";

const To = () => {
    return (
        <div className="input-field-container flex-fill">
            <div className="logo-input swap-next">
                <div className="input-logo-section">
                    <div className="input-logo">
                        <img src={stkXprt} className="logo" alt="cc"/>
                        stkXPRT
                    </div>
                    <p className="available"><span className="text">Available: </span> <span className="value">0.00</span> </p>
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
