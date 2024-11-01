import React from 'react';

const Video = () => {
  return (
    <div className='max-w-6xl mx-auto flex justify-center items-center h-[500px] pt-20'>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/wO1g6oltB5E"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
      ></iframe>
    </div>
  );
}

export default Video;
