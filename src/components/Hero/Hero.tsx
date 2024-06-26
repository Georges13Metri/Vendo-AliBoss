import React from "react";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
import Hero4 from "./Hero4";
import Hero5 from "./Hero5";
import Hero6 from "./Hero6/Hero6";
import Hero7 from "./Hero7";
import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";
import Hero8 from "./Hero8/Hero8";

const Hero = () => {
  return (
    <div>
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <YoutubeVideo videoId="YEpgxGSuxpQ" />
      <Hero4 />
      <Hero5 />
      <Hero6 />
      <Hero7 />
      <Hero8 />
    </div>
  );
};

export default Hero;
