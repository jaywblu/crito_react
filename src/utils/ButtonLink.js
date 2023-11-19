import React from 'react'
import { Link } from 'react-router-dom';

const ButtonLink = ({color, text, url}) => {

  let colorClass
  let iconClass = 'link-icon'

  switch(color) {
    case "transparent":
    default:
      colorClass = ''
      break;
    case "primary":
      colorClass = 'btn-primary'
      break;
    case "secondary":
      colorClass = 'btn-secondary'
      break;
    case "dark":
      colorClass = 'btn-dark'
      iconClass = 'link-icon-white'
      break;
  }

  return (
    <Link to={url} role="button" className={`btn ${colorClass}`}>{text}<i className={`icon ${iconClass}`}></i></Link>
  )
}

export default ButtonLink