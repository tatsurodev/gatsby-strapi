import React from 'react'
import { FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa'

const socialLinks = [
  {
    component: 'AboutMe',
    label: 'github',
    url: `https://github.com/tatsurodev`,
    icon: <FaGithub className="social-links" />,
  },
  {
    component: 'AboutMe',
    label: 'twitter',
    url: `https://twitter.com/tatsurodev`,
    icon: <FaTwitter className="social-links" />,
  },
  {
    component: 'AboutMe',
    label: 'youtube',
    url: `https://www.youtube.com/channel/UC1d2a6SVCGs8kIc4aW9_lLQ`,
    icon: <FaYoutube className="social-links" />,
  },
]

export default socialLinks
