import React from "react";
import "../styles/home.css";
import vid1 from "../assets/vedios/vid1.mp4";
import vid2 from "../assets/vedios/vid2.mp4";
import vid3 from "../assets/vedios/vid3.mp4";
const VidData = [
  {
    id: 1,
    autoplay: "autoPlay",
    vedio: vid1,
  },
  {
    id: 2,
    autoplay: "autoPlay",

    vedio: vid2,
  },
  {
    id: 3,
    autoplay: "autoPlay",
    vedio: vid3,
  },
  {
    id: 4,
    autoplay: "autoPlay",
    vedio: vid1,
  },
  {
    id: 5,
    autoplay: "autoPlay",
    vedio: vid3,
  },
  {
    id: 6,
    autoplay: "autoPlay",
    vedio: vid1,
  },
  {
    id: 7,
    autoplay: "autoPlay",
    vedio: vid2,
  },
  {
    id: 8,
    autoplay: "autoPlay",
    vedio: vid3,
  },
  {
    id: 9,
    autoplay: "autoPlay",
    vedio: vid2,
  },
  {
    id: 10,
    autoplay: "autoPlay",
    vedio: vid3,
  },

  {
    id: 9,
    autoplay: "autoPlay",
    vedio: vid3,
  },
];
function Localvideo() {
  return (
    <>
      <div className="container">
        <h1>Explo-vid</h1>
        <p>a world tobe explored....</p>
        <div className="gallery">
          {VidData.map((vidEach, index) => {
            return (
              <div className="vid">
                <video
                  height="300px"
                  width="100%"
                  className="vedio-item"
                  autoPlay={vidEach.play}
                  loop
                  controls
                  muted
                  src={vidEach.vedio}
                />
              </div>
            );
          })}
        </div>

        {/* <div className="vid">
            <video autoPlay loop controls muted src={vid1} />
          </div> */}
      </div>
    </>
  );
}

export default Localvideo;
