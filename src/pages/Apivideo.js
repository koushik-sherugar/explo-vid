//key-1:  AIzaSyBYkmudUiwp24v-x799xeLoUUikoep-5jo
// key 2: AIzaSyBVBS2je41eAGApF_oXJ4d4olg924KsQQY
import { React, useState, useEffect } from "react";
// import "../styles/vedios.css";
import "../styles/grid.css";

import axios from "axios";
// import VideoPlayer from "react-video-js-player";
import Videoplayer from "./Videoplayer";
import { Link, useNavigate } from "react-router-dom";
// Y
let api_key = "AIzaSyBVBS2je41eAGApF_oXJ4d4olg924KsQQY";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

const Apivideo = () => {
  const [youtubeData, setdata] = useState([]);
  let navigate = useNavigate();
  const getData = () => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${api_key}`
      )
      .then((response) => {
        // console.log(response.data.items);
        setdata(response.data.items);
        // Youtubedata(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  // console.log("youtubeDataaa", youtubeData);

  // useEffect(() => {
  // fetch(
  //   video_http +
  //     new URLSearchParams({
  //       key: api_key,
  //       part: "snippet",
  //       chart: "mostPopular",
  //       maxResults: 10,
  //       regionCode: "IN",
  //     })
  // )
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setdata(data.items);

  //     data.items.forEach((item) => {
  //       // var thumbnails = item.snippet.thumbnails.medium;
  //     });
  //   })
  //   .catch((err) => console.log(err));
  // }, []);
  const thumbclicked = (data) => {
    console.log(`${data} da`);
  };

  function playVideo(id) {
    console.log("playVideo id", id);
    // <Videoplayer data={id} />;
    const dataId = id;
  }
  return (
    <>
      <div className="container">
        <div className="gallery">
          {youtubeData.map((data, vid) => {
            return (
              <>
                <div
                  key={vid}
                  // onClick={() => {
                  //   onThumbnailSelect();
                  // }}
                  className="vid"
                >
                  {/* <a href={`https://youtube.com/embed/${data.id}/autoplay=1`}> */}
                  <img
                    src={data.snippet.thumbnails.medium.url}
                    alt="youtube video"
                    onDoubleClick={() => {
                      navigate("/videoplayer");
                      // thumbclicked(`data`);
                      // console.log("data.iddddd", data.id);
                      // <Videoplayer name={data.id} />;
                      // onDoubleClick={() => {
                      // window.alert(`Double clicked!`);
                      // <Link to="/vedioplayer" />;
                      // console.log("double click", data.id);
                      // }}
                      // <VideoPlayer
                      //   // poster={pic1}
                      //   height="300px"
                      //   width="300px"
                      //   // autoPlay
                      //   bigPlayButton={false}
                      //   hideControls={["volume", "timer"]}
                      //   playbackRates={[0.5, 1, 1.5, 2]}
                      //   src={`https://youtube.com/embed/${data.id}`}
                      // />;
                    }}
                  />
                  {
                    // dataID = playVideo()
                    // console.log("playVideo()", playVideo())
                    function playVideo(id) {}
                  }
                  {/* </a> */}
                </div>
              </>
            );
          })}
        </div>
      </div>

      {/* <img src={youtubeData.items[0].snippet.thumbnails.medium.url} alt="" />; */}
      {/* {youtubeData.items.map((data) => {
        // console.log("data", data.snippet.thumbnails.medium.url);
        <img src={data.snippet.thumbnails.medium.url} alt="Youtube Video" />;
      })} */}
      {/* {console.log(
        "youtube data2",
        youtubeData[0].snippet.thumbnails.medium.url
      )} */}
    </>
  );
};

export default Apivideo;

// {youtubeData.map((Ydata) => {
// console.log("yDAta2", Ydata.snippet.thumbnails.standard.url);
// <div
//   className="video"
//   onclick="location.href = 'https://youtube.com/watch?v=${Ydata.id}'"
//   // onclick="location.href = 'https://www.youtube.com/embed/${data.id}'"
// >
//   <img src={Ydata.snippet.thumbnails.standard.url} alt="" />;
//   {/* <img src="Ydata.snippet.thumbnails.default.url" alt="" />; */}
// </div>;
// })}
