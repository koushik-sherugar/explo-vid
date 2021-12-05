import React from "react";
import "../styles/grid.css";
import "../styles/localvideo.css";
// import pic1 from "../assets/images/pic1.jpeg";
import VideoPlayer from "react-video-js-player";
import vid1 from "../assets/vedios/vid1.mp4";
import vid2 from "../assets/vedios/vid2.mp4";
import vid3 from "../assets/vedios/vid3.mp4";
const VidData = [
  {
    id: 1,
    autoplay: "autoPlay",
    vedio: vid1,
    posterSrc: "https://source.unsplash.com/1400x1900/?lotus,flower",
  },
  {
    id: 2,
    autoplay: "autoPlay",

    vedio: vid2,
    posterSrc: "https://source.unsplash.com/1400x1900/?star,home",
  },
  {
    id: 3,
    autoplay: "autoPlay",
    vedio: vid3,
    posterSrc: "https://source.unsplash.com/1400x1900/?gallexy,milkyway,home",
  },
  {
    id: 4,
    autoplay: "autoPlay",
    vedio: vid1,
    posterSrc: "https://source.unsplash.com/1400x1900/?beach,home",
  },
  {
    id: 5,
    autoplay: "autoPlay",
    vedio: vid3,
    posterSrc: "https://source.unsplash.com/1400x1900/?beach,home",
  },
  {
    id: 6,
    autoplay: "autoPlay",
    vedio: vid1,
    posterSrc: "https://source.unsplash.com/1400x1900/?beach,home",
  },
  {
    id: 7,
    autoplay: "autoPlay",
    vedio: vid2,
    posterSrc: "https://source.unsplash.com/1400x1900/?beach,home",
  },
  {
    id: 8,
    autoplay: "autoPlay",
    vedio: vid3,
    posterSrc: "https://source.unsplash.com/1400x1900/?beach,home",
  },
  {
    id: 9,
    autoplay: "autoPlay",
    vedio: vid2,
    posterSrc: "https://source.unsplash.com/1400x1900/?beach,home",
  },
  {
    id: 10,
    autoplay: "autoPlay",
    vedio: vid3,
    posterSrc: "https://source.unsplash.com/1400x1900/?beach,home",
  },

  {
    id: 11,
    autoplay: "autoPlay",
    vedio: vid3,
    posterSrc: "https://source.unsplash.com/1400x1900/?beach,home",
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
                {/* <video
                  height="300px"
                  width="100%"
                  className="vedio-item"
                  autoPlay={vidEach.play}
                  loop
                  controls
                  muted
                  src={vidEach.vedio}
                /> */}
                <VideoPlayer
                  poster={vidEach.posterSrc}
                  height="300px"
                  width="500px"
                  autoPlay={true}
                  controls={true}
                  responsive={true}
                  fluid={true}
                  bigPlayButton={false}
                  hideControls={["volume", "timer"]}
                  playbackRates={[0.5, 1, 1.5, 2]}
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
