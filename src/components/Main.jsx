import React from 'react'
import video from '../assets/EquineHome.mp4';

const Main = () => {
  return (
    <div className='main'>
      <div className="overlay"></div>
        <video src={video} autoPlay loop muted/>
        <div className='content'>
            <h2>Welcome to,</h2>
            <h3>Hug Equine Assisted Learning Center</h3>
        </div>
    </div>
  )
}

export default Main
