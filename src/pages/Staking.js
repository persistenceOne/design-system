import React from 'react';
import Topbar from "../components/Topbar";
import {Tab, Tabs} from "react-bootstrap";
import Stake from "../container/Stake";
import UnStake from "../container/UnStake";

const Staking = () => (
    <div className="main-container">
        <Topbar/>
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
    </div>
);

export default Staking;