import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="container-fluid text-white bg-dark py-4">
    <div className="container">
       <div className="row">
          <div className="col-md-6 col-lg-6 col-xxl-5 pse-3 order-lg-last mb-4 mb-lg-0">
             <div className="ft-logos float-end">
                <ul className="ft-social-list">
                   <li> 
                      <a rel="noopener" href="https://twitter.com/ParallelsRAS" target="_blank" title="Parallels Twitter" alt="Parallels Twitter">
                        <img src="https://b2b.parallels.com/rs/280-QDK-215/images/nicon-twitter.png" alt="Twitter" />
                      </a>
                   </li>
                   <li>
                      <a rel="noopener" href="https://www.linkedin.com/showcase/parallels" target="_blank" title="Parallels LinkedIn" alt="Parallels LinkedIn">
                        <img src="https://b2b.parallels.com/rs/280-QDK-215/images/nicon-linkedIn.png" alt="LinkedIn" />
                      </a>
                   </li>
                   <li>
                      <a rel="noopener" href="https://www.youtube.com/playlist?list=PLFEwXRyfSuQvSJuEEd_5nwl5Rgf7kLF0Q" target="_blank" title="Parallels YouTube" alt="Parallels YouTube">
                        <img src="https://b2b.parallels.com/rs/280-QDK-215/images/nicon-youtube.png" alt="YouTube" />
                      </a>
                   </li>
                </ul>
             </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xxl-7 pb-md-0 order-md-first">
             <ul className="ft-copyright-list">
                <li>@{new Date().getFullYear() } Parallels International GmbH. All Rights Reserved.</li>
                <br/>
                <li><NavLink to="/" className="nav-link " aria-current="page" href="#">Home</NavLink></li>
                <li><NavLink to="/about" className="nav-link " aria-current="page" href="#">About us</NavLink></li>
                <li><NavLink to="/contract" className="nav-link " aria-current="page" href="#">Contract</NavLink></li>
             </ul>
          </div>
       </div>
    </div>
 </footer>
  )
}
export default Footer 