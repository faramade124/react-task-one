import React from 'react';
import profileImage from '../assets/ProfileImage/Raheem Adekunle_resized.jpg';
import './Profileinfo.css';

function ProfileCard(props) {
  return (
    <div className="profile-card">
      <img src={profileImage} alt="Profile" />
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
    </div>
  );
}

export default ProfileCard;

