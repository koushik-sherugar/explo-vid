import React from "react";
import "../styles/videoplayer.css";
function Videoplayer(props) {
  {
    console.log("ppppppppppp", props);
  }
  return (
    <>
      <h1>pass id to src link - id is: {props.id}</h1>
      <iframe
        width="100%"
        height="700px"
        src="https://www.youtube.com/embed/X_4rcQeiKDk"
        frameborder="0"
        allowfullscreen
      />
    </>
  );
}

export default Videoplayer;
