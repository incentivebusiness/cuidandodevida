import React from 'react';

const Video = () => {
  return (
    <div className=' max-w-6xl mx-auto flex flex-col justify-center items-center h-[500px] pt-20'>

   <h1 className='text-3xl lg:text-5xl font-bold text-[rgb(1,24,74)] pb-6'> Cuidando de Vida</h1>

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
