import React from 'react'

import img_Team_01 from "../assets/images/team-img-1.png"
import img_Team_02 from "../assets/images/team-img-2.png"
import img_Team_03 from "../assets/images/team-img-3.png"
import img_Team_04 from "../assets/images/team-img-4.png"
import TeamMemberComponent from './TeamMemberComponent'

const teamMembers = [
    {
        imgUrl: img_Team_01,
        name: "Kristine Palmer",
        role: "Chief Operation Officer"
    },
    {
        imgUrl: img_Team_02,
        name: "Mark Aubri",
        role: "Senior Consultant"
    },
    {
        imgUrl: img_Team_03,
        name: "Kimberly Hansen",
        role: "Senior Consultant"
    },
    {
        imgUrl: img_Team_04,
        name: "Justin Willoman",
        role: "Senior Tech Consultant"
    }
]

const MeetOurTeamSection = () => {
  return (
    <section id="meetOurTeam" className="container padding-top-large margin-top-small">
        <div className="row header-button-split">
            <div className="col">
                <span className="section-title">Meet Our Team</span>
                <h2>Experience Team Members</h2>
            </div>
            <div className="col">
                <button type="button" className="btn btn-primary">Browse Team<i className="icon link-icon"></i></button>
            </div>
        </div>
        <div className="grid-wrapper">
            {
                teamMembers.map((member, index) => (
                    <TeamMemberComponent key={index} imgUrl={member.imgUrl} name={member.name} role={member.role}></TeamMemberComponent>
                ))
            }
        </div>
        <div className="pagination">
            <div className="page-item"></div>
            <div className="page-item active-page"></div>
            <div className="page-item"></div>
            <div className="page-item"></div>
            <div className="page-item"></div>
        </div>
    </section>
  )
}

export default MeetOurTeamSection