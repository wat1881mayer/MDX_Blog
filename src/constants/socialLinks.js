import React from "react"
import {
  FaFacebookSquare,
  FaDribbbleSquare,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa"
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://github.com/wat1881mayer?tab=repositories">
          <FaGithubSquare className="social-icon github-icon"></FaGithubSquare>
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <FaTwitterSquare className="social-icon twitter-icon"></FaTwitterSquare>
        </a>
      </li>
    </ul>
  )
}
export default SocialLinks
