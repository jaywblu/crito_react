import React from 'react'

const TeamMemberComponent = ({imgUrl, name, role}) => {
  return (
    <div className="grid-box">
        <img src={imgUrl} alt={`${name} - ${role}`} />
        <h3>{name}</h3>
        <p>{role}</p>
    </div>
  )
}

export default TeamMemberComponent