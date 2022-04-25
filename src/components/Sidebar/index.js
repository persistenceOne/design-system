import React, {useState} from "react"
import Icon from "../Icon";
import logo from "../../assets/images/logo.svg";
import xprt from "../../assets/images/xprt_logo.svg";
import stkXPRT from "../../assets/images/stk_xprt.svg";
import {Collapse, Nav, OverlayTrigger, Popover, Tooltip} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Sidebar =  () => {
    const [open, setOpen] = useState(false);

    const popover = (
        <Popover id="popover-basic" className="custom">
            <Popover.Body>
                <p className="content m-0">
                    And here's some <strong>amazing</strong> content. It's very engaging.
                    right?
                </p>
            </Popover.Body>
        </Popover>
    );

    const socialList = [
        {
            url: '',
            iconName: 'twitter-logo',
            tooltip: 'twitter'
        },
        {
            url: '',
            iconName: 'telegram-plane',
            tooltip: 'telegram'
        },
        {
            url:  '' ,
            iconName: 'medium-m',
            tooltip: 'medium'
        }
    ];

    const socialIcon = (iconName) => {
        // ReactGa.event({
        //     category: 'Sociallinks',
        //     action: 'Clicked on ' + iconName
        // })
        console.log('1');
    }

    return(
        <aside className="side-bar">
            <div className="side-bar-content">
                <div className="nav-link-section">
                    <div className="logo-container">
                        <img src={logo} alt="logo" />
                    </div>
                    <Nav defaultActiveKey="/" className="flex-column nav-list">
                        <Nav.Item as="li">
                            <NavLink to="/" className="nav-link">
                                <Icon
                                    icon="staking"
                                    viewClass="staking"
                                />
                                <span className="text">Staking</span>
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <NavLink eventKey="link-1" to="/defi" className="nav-link">
                                <Icon
                                    icon="defi"
                                    viewClass="defi"
                                />
                                <span className="text">Defi</span>
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <NavLink eventKey="link-2" to="/transactions" className="nav-link">
                                <Icon
                                    icon="transactions"
                                    viewClass="transactios"
                                />
                                <span className="text">Transactions</span>
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <p onClick={() => setOpen(!open)}
                               aria-controls="more-list"
                               aria-expanded={open}
                               className={`d-flex justify-content-between align-items-center nav-link m-0 ${open ? "opened" : "closed"}`}>
                                <div className="">
                                    <Icon
                                        icon="more"
                                        viewClass="more"
                                    />
                                    <span className="text">More</span>
                                </div>
                                <Icon
                                    icon="right-arrow"
                                    viewClass="right-arrow m-0"
                                />
                            </p>
                            <Collapse in={open}>
                                <div id="more-list" className="more-list">
                                    <li>
                                        pStake Website
                                    </li>
                                    <li>
                                        pStake Docs
                                    </li>
                                    <li>
                                        pStake Testnet
                                    </li>
                                </div>
                            </Collapse>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className="balance-section">
                    {/*<div className="balance-note">*/}
                    {/*    */}
                    {/*</div>*/}
                    <div className="balance-list">
                        <h2 className="heading">Balances
                            <OverlayTrigger trigger={['hover', 'focus']}  placement="bottom" overlay={popover}>
                                <button className="icon-button info" type="button"><Icon
                                    viewClass="arrow-right"
                                    icon="info"/></button>
                            </OverlayTrigger>
                        </h2>
                        <div className="list first-child">
                            <div className="logo">
                                <img src={xprt} alt="xprt-logo"/>
                                <span>XPRT</span>
                            </div>
                            <p className="text">Connect Wallet</p>
                        </div>
                        <div className="list">
                            <div className="logo">
                                <img src={stkXPRT} alt="xprt-logo"/>
                                <span>stkXPRT</span>
                            </div>
                            <p className="balance">0.900</p>
                        </div>
                    </div>

                    <div className="social-links">
                        <ul className="list-unstyled social-links-list">
                            {
                                socialList.map((item, index) => (
                                    <OverlayTrigger
                                        key={item.iconName}
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-${item.iconName}}`}>
                                                {item.tooltip}
                                            </Tooltip>
                                        }
                                    >
                                        <a href={item.url} onClick={() => socialIcon(item.iconName)} rel="noopener noreferrer"
                                           target="_blank"><Icon viewClass="social_icon_imgg"
                                                                 icon={item.iconName} /></a>
                                    </OverlayTrigger>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    )
};

export default Sidebar;