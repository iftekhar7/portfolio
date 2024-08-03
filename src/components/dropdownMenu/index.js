import React, { useState, useEffect, useRef } from "react";
import Button from "../Button";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

function DropdownMenu() {
    const navigate = useNavigate()
    const [openDropdown, setOpenDropdown] = useState(false);
    const [closeMenu, setCloseMenu] = useState(false)
    const sidebarRef = useRef(null);
    const pathname = window.location.pathname
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (openDropdown && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setOpenDropdown(false)
                setCloseMenu(true)
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [openDropdown]);

    const openDropdownHandler = () => {
        setOpenDropdown(prev => !prev);
    };

    const handleClickAway = () => {
        setOpenDropdown(prev => !prev)
        setCloseMenu(true)
    }


    const handleTabClick = (tab) => {
        if (tab) {
            navigate(tab);
        }
    };


    return (
        <div className="">
            <div className="header-menu">
                <Button className="button-standard" icon="fas fa-bars" onClick={openDropdownHandler} />
                <div className="dropdown83">
                    <div className={openDropdown ? 'dropdown-menu83 sliding-dropdown83-show' : "dropdown-menu83 " + (closeMenu ? "sliding-dropdown83-hide" : "")} ref={sidebarRef}>
                        <Button className='button-standard' onClick={handleClickAway} icon='far fa-times' />
                        <div className="side-nav">
                            <Navbar pathname={pathname} handleTabClick={handleTabClick} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DropdownMenu;
