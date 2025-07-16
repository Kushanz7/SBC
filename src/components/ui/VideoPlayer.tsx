import React from 'react';

interface VideoPlayerProps {
  src: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, className = "" }) => {
  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    </div>
  );
};

export default VideoPlayer;