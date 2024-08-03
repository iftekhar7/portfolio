import React from 'react' 

function Navbar(props) {
    const {handleTabClick,pathname} = props 
    return (
        <nav id="navbar" className="navbar mobile-view">
            <ul>
                <li><a className={pathname === '/' ? 'active' : ''} href="/" onClick={() => handleTabClick('/')}>Home</a></li>
                <li><a className={pathname === '/about' ? 'active' : ''} href="/about" onClick={() => handleTabClick('/about')}>About</a></li>
                <li><a className={pathname === '/work' ? 'active' : ''} href="/work" onClick={() => handleTabClick('/work')}>Work</a></li>
                <li><a className={pathname === '/portfolio' ? 'active' : ''} href="/portfolio" onClick={() => handleTabClick('/portfolio')}>Portfolio</a></li>
                <li><a className={pathname === '/contact' ? 'active' : ''} href="contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
    )
}

export default Navbar;