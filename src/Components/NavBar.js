import React from 'react'
import logo from '../images/logo.svg'
import { pageLinks } from './data'
import { socialLinks } from './data'

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo}className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <left this comment on purpose */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((links) => {
            return(
            <li key={links.id}>
            <a href={links.href} className="nav-link"> {links.title}</a>
          </li>);
          })
          }
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((social) => {
            return(
            <li key={social.id}>
            <a href={social.href} target="_blank" className="nav-icon"
              ><i className={social.icon}></i></a>
          </li>)
          })}
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default NavBar
