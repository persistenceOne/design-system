import React from 'react';
import Sidebar from "../components/Sidebar";
import { useMediaQuery } from 'react-responsive'
import { Offcanvas} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {hideMobileSidebar} from "../store/actions/sidebar";

const LayoutDefault = ({ children }) => {
    const showSidebar = useSelector((state) => state.mobileSidebar.mobileSidebar);
    const mobile = useMediaQuery({ query: '(max-width: 768px)' });
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(hideMobileSidebar());
    };
    return(
    <div className="app-layout">

        {
            !mobile ?
                <Sidebar/>
            :
                <Offcanvas show={showSidebar} onHide={handleClose} className="custom-offcanvas">
                    <Offcanvas.Header closeButton>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Sidebar/>
                    </Offcanvas.Body>
                </Offcanvas>
        }
        {children}
    </div>
    )
};

export default LayoutDefault;  