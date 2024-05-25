import React from "react";

interface YoutubeVideoProps {
  videoId: string;
  title?: string;
}

const YoutubeVideo: React.FC<YoutubeVideoProps> = ({ videoId, title }) => {
  const opts = {
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      fs: 1,
    },
  };
  const buildSrcUrl = (videoId: string, playerVars: any) => {
    const baseUrl = `https://www.youtube.com/embed/${videoId}`;
    const params = new URLSearchParams(playerVars).toString();
    return `${baseUrl}?${params}`;
  };

  return (
    <div
      className="flex justify-center 
    items-center p-4 bg-white "
    >
      <div
        className="relative 
      w-full h-0 pb-[56.25%] lg:pb-[25%]
      sm:max-w-md md:max-w-lg lg:max-w-xl 
      xl:max-w-2xl"
      >
        <iframe
          className="absolute top-0  
          w-full h-full max-h-[80vh]
           md:max-h-[70vh] lg:max-h-[60vh] 
           xl:max-h-[50vh] "
          src={buildSrcUrl(videoId, opts.playerVars)}
          //   title={title || "YouTube video player"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default YoutubeVideo;
