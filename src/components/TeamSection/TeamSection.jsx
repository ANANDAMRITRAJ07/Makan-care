import React from "react";
import "./TeamSection.css";
import Member_img from '../../assets/memver-pic.png'

const teamMembers = [
  { name: "Christian Leth-Espensen", role: "Engineering", img: "/assets/memver-pic.png" },
  { name: "Nicky Christensen", role: "Engineering", img: {Member_img} },
  { name: "Benjamin Nørgaard", role: "Engineering", img: {Member_img} },
  { name: "Thor Christensen", role: "Co-Founder", img: {Member_img} },
  { name: "Jack Theobald", role: "Design", img: {Member_img} },
  { name: "Niklas Refnov", role: "Growth", img: {Member_img} },
  { name: "Anders Johnsen", role: "Co-Founder", img: {Member_img} },
  { name: "Matias Frank", role: "Engineering", img: {Member_img} },
];

const TeamSection = () => {
  return (
    <div className="team-container">
      <h2>It's all about the people</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
