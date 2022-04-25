import React from 'react';
import "./index.css";
import Icon from "../Icon";
import {useMediaQuery} from "react-responsive";
import {useDispatch} from "react-redux";
import {showMobileSidebar} from "../../store/actions/sidebar";
import logo from "../../assets/images/logo.svg";
import {stringTruncate} from "../../utils/helper";
import Copy from "../Copy";

const Topbar = () => {
    const mobile = useMediaQuery({ query: '(max-width: 768px)' });
    const dispatch = useDispatch();
    const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
    console.log(loginInfo,  "login");

    const handleMenu = () =>{
        dispatch(showMobileSidebar());
    }

    const handleConnect = async () => {
    };
    return(
    <div className="top-bar">
        <div className="top-bar-content">
            {mobile ?
                <div className="logo-container">
                    <img src={logo} alt="logo"/>
                </div>
                : ""
            }
            {/*<Dropdown>*/}
            {/*    <Dropdown.Toggle id="dropdown-basic" className="custom">*/}
            {/*        <img className="logo" src={xprt_logo} alt="xprt_logo"/>*/}
            {/*        Dropdown Button*/}
            {/*        <Icon*/}
            {/*            icon="down-arrow"*/}
            {/*            viewClass="down-arrow"*/}
            {/*        />*/}
            {/*    </Dropdown.Toggle>*/}

            {/*    <Dropdown.Menu>*/}
            {/*        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>*/}
            {/*        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>*/}
            {/*        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
            {/*    </Dropdown.Menu>*/}
            {/*</Dropdown>*/}
            <div className="right-content">
                <div className="connect-button">
                    {loginInfo && loginInfo.loginToken ?
                        <button className="button connected" onClick={handleConnect}>
                            {stringTruncate(loginInfo && loginInfo.address)}
                            <Copy id={loginInfo.address}/>
                        </button>
                        :
                        <button className="button button-primary " onClick={handleConnect}>
                            Connect wallet
                        </button>
                    }
                </div>
                {mobile ?
                    <button className="icon-button info" onClick={handleMenu}>
                        <Icon
                            icon="menu"
                            viewClass="menu"
                        />
                    </button>
                    : ""}
            </div>
        </div>
    </div>
)};

export default Topbar;