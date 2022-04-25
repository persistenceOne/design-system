import React, {useEffect, useState} from "react";
import {Dropdown} from "react-bootstrap";
import Icon from "../../components/Icon";
import xprt_logo from "../../assets/images/xprt_logo.svg";
import comdex from "../../assets/images/comdex.svg";
import kava from "../../assets/images/kava.svg";
import osmo from "../../assets/images/osmo.svg";

const From = () => {
    const list = [
        {
            name:'xprt',
            balance:11,
            logo:xprt_logo
        },
        {
            name:'comdex',
            balance:11,
            logo:comdex
        },
        {
            name:'kava',
            balance:12,
            logo:kava
        },
        {
            name:'osmo',
            balance:14,
            logo:osmo
        },
    ];
    const [tokenList, setTokenList] = useState([]);
    const [selectedToken, setSelectedToken] = useState(list[0]);
    useEffect(()=>{
        setTokenList(list)
    }, [list]);
    const handleSelect = (evt) =>{
        const selected = tokenList.find(element => element.name === evt);
        console.log(evt, "valueeeee");

        setSelectedToken(selected);
    }
    const handleSearch = (e) => {
        if(e.target.value === ""){
            setTokenList(list);
        }else {
            let adfas = tokenList.filter(item => item.name.includes(e.target.value));
            setTokenList(adfas);
        }
    };
    return (
        <div className="input-field-container flex-fill">
            <div className="dropdown-input initial-child">
                <Dropdown onSelect={handleSelect}>
                    <Dropdown.Toggle id="dropdown-basic">
                        <img src={selectedToken.logo} className="logo" alt="cc"/>
                        {selectedToken.name}
                        <Icon
                            icon="down-arrow"
                            viewClass="arrow"
                        />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <div className="search-input">
                            <input
                                type="text"
                                onChange={handleSearch}
                                placeholder="search for a token"
                            />
                            <Icon
                                icon="search"
                                viewClass="search"
                            />
                        </div>
                        <div className="dropdown-list">
                            {
                                tokenList.map((item, index) => (
                                    <Dropdown.Item eventKey={item.name}>
                                        <div className="logo">
                                            <img src={item.logo} alt={item.logo}/>
                                            {item.name}
                                        </div>
                                        <div className="balance">
                                            {item.balance}
                                        </div>

                                    </Dropdown.Item>
                                ))
                            }
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
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


export default From;
