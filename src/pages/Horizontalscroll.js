import React from "react";
import "../styles/horizontalscroll.css";
const Horizontalscroll = () => {
  const Hviddata = [
    {
      id: 1,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U?feature=player_embedded",
    },
    {
      id: 2,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U?feature=player_embedded",
    },
    {
      id: 3,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U?feature=player_embedded",
    },
    {
      id: 4,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U?feature=player_embedded",
    },
    {
      id: 1,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U?feature=player_embedded",
    },
    {
      id: 2,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U?feature=player_embedded",
    },
    {
      id: 3,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U?feature=player_embedded",
    },
    {
      id: 4,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U?feature=player_embedded",
    },
    {
      id: 1,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U?feature=player_embedded",
    },
    {
      id: 2,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U?feature=player_embedded",
    },
    {
      id: 3,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U?feature=player_embedded",
    },
    {
      id: 4,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U?feature=player_embedded",
    },
  ];
  return (
    <>
      <div className="H-component mt-1 mb-5">
        {/* <iframe
          allowfullscreen=""
          class="YOUTUBE-iframe-video video-card-top"
          data-thumbnail-src="https://i.ytimg.com/vi/4GvzAKFSXDU/0.jpg"
          frameborder="0"
          src="https://www.youtube.com/embed/4GvzAKFSXDU?feature=player_embedded"
        ></iframe> */}
        {Hviddata.map((vid, id) => {
          return (
            <iframe
              className="card"
              allowfullscreen
              className="card YOUTUBE-iframe-video video-card-top"
              data-thumbnail-src={vid.thumbnail}
              frameborder="0"
              src={vid.videoSrc}
            />
          );
        })}
      </div>
    </>
  );
};

export default Horizontalscroll;
