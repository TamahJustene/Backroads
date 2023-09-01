import React from 'react'
import { pageLinks } from './data'
import { socialLinks } from './data'

const Footer = () => {
  return (
    <div>
      
      <footer className="section footer">
        <ul className="footer-links">
          {pageLinks.map((links) => {
            return (
              <li key={links.id}>
            <a href={links.href}className="footer-link">{links.title}</a>
          </li>
            )
          })}
        </ul>
        <ul className="footer-icons">
          {socialLinks.map((social) =>{
            return(
              <li key={social.id}>
              <a href={social.href} target="_blank" className="footer-icon"
              ><i className={social.icon}></i></a>
            </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </div>
  )
}

export default Footer
