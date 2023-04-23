import React, { Component, useEffect, useRef } from 'react';
import backgroundVideo from "file:///C:/Users/Prathyusha%20D/Downloads/video.mp4";

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1
        id="typing-heading"
        style={{
          color: "white",
          fontFamily: "Poppins",
          fontSize: "5rem",
          marginBottom: "20px",
          motion: "yield",
          // fontSize: "48px",
          position: "relative"
        }}
      >
        Revolutionizing Events and Fests
      </h1>
      <h2
        id="connecting-sponsors"
        style={{
          color: "white",
          fontFamily: "Poppins",
          fontSize: "3rem",
          marginBottom: "20px",
          motion: "yield",
          // fontSize: "32px",
          position: "relative",
        }}
      >
        Connecting sponsors, colleges, artists and organisers!
      </h2>
      {/* <button
        style={{
          background: "white",
          border: "2px solid black",
          borderRadius: "10px",
          color: "black",
          fontFamily: "Poppins",
          fontSize: "1.5rem",
          padding: "10px 20px",
          transition: "box-shadow 0.3s ease-in-out",
          boxShadow: "0 0 10px #fff",
          outline: "none",
        }}
        className="glow-on-hover"
      >
        Get Started
      </button> */}
      <h3 id="get-started-text" style={{
        color: "black",
        fontFamily: "Poppins",
        fontSize: "3rem",
        marginBottom: "20px",
        motion: "yield",
        // fontSize: "32px",
        position: "relative",
      }}>
        This is the third heading
      </h3>


    </div>



  );
};
const App = () => {
  const videoRef = useRef()

  useEffect(() => {
    console.log(videoRef.current);
    if (videoRef.current) {
      console.log(videoRef.current.currentTime, videoRef.current.duration)
      window.video = videoRef.current

      setTimeout(() => {
      
        console.log("Ended");
      }, videoRef.current.duration * 1000)
    }
  }, [videoRef])

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <video
        ref={videoRef}
        muted
        autoPlay
        loop
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <Home />
    </div>



  );
};


export default App;