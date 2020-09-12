import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import './style.scss'

export default function Header () {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery (
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <header id="luxbar" className="luxbar-default">
      <input type="checkbox" className="luxbar-checkbox" id="luxbar-checkbox"/>
      <div className="luxbar-menu luxbar-menu-right luxbar-menu-light">
        <ul className="luxbar-navigation">
          <li className="luxbar-header">
            <a href="/" className="luxbar-brand">{title}</a>
            <label className="luxbar-hamburger luxbar-hamburger-doublespin" 
            id="luxbar-hamburger" htmlFor="luxbar-checkbox"> <span></span> </label>
          </li>
          {/* <li className="luxbar-item"><Link to="/">Blog</Link></li> */}
          <li className="luxbar-item"><Link to="/pages/about">Profile</Link></li>
          <li className="luxbar-item"><Link to="https://engineer-ruirui.github.io">GitHub</Link></li>
          <li className="luxbar-item"><Link to="https://engineer-ruirui.github.io/gitbook-express/">GitBook</Link></li>
          {/* <li className="luxbar-item"><Link to="/portfolio">Portfolio</Link></li> */}
          <li className="luxbar-item"><Link to="/privacy">Privacy Policy</Link></li>
        </ul>
      </div>
  </header>
  )
}