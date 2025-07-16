import React, { useEffect, useRef } from 'react';
import '../styles/VideoPlayer.css';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slightly slower playback for a more dramatic effect
    }
  }, []);

  return (
    <div className="video-container">
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        className="background-video"
      >
        <source src="/videos/mountain-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
    </div>
  );
};

export default VideoPlayer;