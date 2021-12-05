import React from "react";
function About() {
  return (
    <>
      <div className="container text-center">
        <h2 className="mt-5 display-1 text-capitalize fw-bolder text-primary text-shadow-sm">
          About
        </h2>
        <h4 className="mt-5 lead text-lg fs-3 ">
          Explo-vid is a vedio player project in which user can play youtube's
          top trending vedios as well as some local vedios on double click from
          a random generated vedio grid layout.
        </h4>
        <p className="mt-5 text-dark">
          It's getting youtube vedio link and vedio's thumbnail through youtube
          Api and displaying it in a grid format. In local vedio used
          react-vedio player package to display vedio with unsplash api url as
          thumbnail.
        </p>
      </div>
    </>
  );
}

export default About;
