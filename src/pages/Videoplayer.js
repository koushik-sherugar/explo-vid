import React from "react";
import "../styles/videoplayer.css";

import Horizontalscroll from "./Horizontalscroll";
import YouTube from "react-youtube";

function Videoplayer(props) {
  {
    console.log("ppppppppppp", props);
  }
  const opts = {
    height: "700",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 1,
    },
  };
  return (
    <>
      <h1>
        api id from apivedio component passed through prop is id: {props.id}
      </h1>
      {/* <iframe
        width="100%"
        height="700px"
        src="https://www.youtube.com/embed/X_4rcQeiKDk"
        // src="'https://www.youtube.com/embed/'`${props.id}`"
        frameborder="0"
        allowfullscreen
      /> */}
      <YouTube
        width="100%"
        height="700px"
        videoId="X_4rcQeiKDk"
        opts={opts}
        // src="'https://www.youtube.com/embed/'`${props.id}`"
        frameborder="0"
        allowfullscreen
      />
      <Horizontalscroll />
    </>
  );
}

export default Videoplayer;
