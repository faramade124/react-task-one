import React from 'react';
import './App.css';
import ProfileCard from './Components/ProfileInfo';
// import profileImage from './assets/ProfileImage/Raheem Adekunle_resized.jpg';

function App() {
  return (
    <div className="App">
      <ProfileCard
        name="Raheem  Adekunle"
        image="./assets/ProfileImage/Raheem Adekunle_resized.jpg"
        bio=" I am front-end developer  passionate about learing React and modern web development. 
        I love to travel and explore new things about technology ."
      />
    </div>
  );
}

export default App;
