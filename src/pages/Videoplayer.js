import React from "react";
import "../styles/videoplayer.css";
function Videoplayer(props) {
  {
    console.log("ppppppppppp", props);
  }
  return (
    <>
      <h1>
        api id from apivedio component passed through prop is id: {props.id}
      </h1>
      <iframe
        width="100%"
        height="700px"
        // src="https://www.youtube.com/embed/X_4rcQeiKDk"
        src="https://www.youtube.com/embed/$`{props.id}`"
        frameborder="0"
        allowfullscreen
      />
    </>
  );
}

export default Videoplayer;
