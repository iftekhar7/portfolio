import React from 'react'
import { useNavigate } from 'react-router-dom'; 
import Button from '../Button';
import ThemesToggle from '../ThemesToggle';
import DropdownMenu from '../dropdownMenu';
import Navbar from '../Navbar'; 

function Header(props) {
    const navigate = useNavigate();
    const pathname = window.location.pathname
    const handleTabClick = (tab) => {
        if (tab) {
            navigate(tab);
        }
    };

    const handleDownload = () => {
        const pdfUrl = process.env.PUBLIC_URL + '/Resume-Mohammad-Iftekhar.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Resume-Mohammad-Iftekhar.pdf';
        link.click();
      };

    return (
        <div className='header'>
            <div className='d-flex '>
                <div className='flex-30 header-left-content'>
                    <DropdownMenu />
                    <h6 className='title'>Mohammad Iftekhar </h6>
                    <h6 className='mob-title'>MI</h6> 
                </div>
                <div className='flex-40 d-flex align-items-center justify-content-center'>
                    <Navbar pathname={pathname} handleTabClick={handleTabClick} />
                </div>
                <div className='flex-30 header-right-content'>
                    <Button className='btn btn-success mr-r-20' onClick={handleDownload} label="Download CV" icon="fas fa-download mr-r-10" /> 
                    <ThemesToggle customClass="mr-r-20" onClick={(value)=>props?.setThemes(value)} themes={props.themes}/>
                </div>
            </div>
        </div>
    )
}

export default Header;