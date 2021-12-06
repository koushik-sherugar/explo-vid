import React from "react";
import "../styles/horizontalscroll.css";
const Horizontalscroll = () => {
  const Hviddata = [
    {
      id: 1,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U" +
        "?modestbranding=1;controls=0;showinfo=0;autohide=1;rel=0;",
    },
    {
      id: 2,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U" +
        "?modestbranding=1;controls=0;rel=0",
    },
    {
      id: 3,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U" + "?modestbranding=1",
    },
    {
      id: 4,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U" + "?modestbranding=1",
    },
    {
      id: 1,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U" + "?modestbranding=1",
    },
    {
      id: 2,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U" + "?modestbranding=1",
    },
    {
      id: 3,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U" + "?modestbranding=1",
    },
    {
      id: 4,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U" + "?modestbranding=1",
    },
    {
      id: 1,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U" + "?modestbranding=1",
    },
    {
      id: 2,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U" + "?modestbranding=1",
    },
    {
      id: 3,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U" + "?modestbranding=1",
    },
    {
      id: 4,
      thumbnail: "https://i.ytimg.com/vi/zV0zS1kMF4U/0.jpg",
      videoSrc:
        "https://www.youtube.com/embed/zV0zS1kMF4U" + "?modestbranding=1",
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
          src="https://www.youtube.com/embed/4GvzAKFSXDU"+ "?modestbranding=1"
        ></iframe> */}
        {Hviddata.map((vid, id) => {
          return (
            <div className="p-2">
              <iframe
                allowfullscreen
                className="card YOUTUBE-iframe-video video-card-top"
                data-thumbnail-src={vid.thumbnail}
                frameborder="0"
                src={vid.videoSrc}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Horizontalscroll;
