import React from 'react';
import {Tab, Tabs} from "react-bootstrap";
import Stake from "./Stake";
import UnStake from "./UnStake";
const StakingTabs = () => {
    return(
        <div className="custom-tabs">
            <div className="tabs-container">
                <Tabs defaultActiveKey="Stake" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="Stake" title="Stake">
                        <Stake/>
                    </Tab>
                    <Tab eventKey="Unstake" title="Unstake">
                        <UnStake/>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default StakingTabs;
