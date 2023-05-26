import React from 'react'
import Nav from './Nav'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <nav className="navbar prls-sub-nav navbar-expand-lg bg-fark" >
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand" href="#"><img src="https://b2b.parallels.com/rs/280-QDK-215/images/emailLogo-Parallels.png" height="30" width="140" alt="logo" /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Nav />
            </div>
        </nav>
    )
}

export default Header