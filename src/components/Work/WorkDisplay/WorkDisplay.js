import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faXmark,
  faChevronLeft,
  faChevronRight,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

function WorkDisplay({ displayOpen, displayChange, workInfo }) {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div
      className={
        displayOpen
          ? "main-work-display-info display-open"
          : "main-work-display-info display-closed"
      }
    >
      <FontAwesomeIcon
        onClick={() => displayChange()}
        className="display-close-icon"
        icon={faXmark}
      />
      <div className="display-info-container">
        <div className="display-info-title">{workInfo?.title}</div>
        <div className="display-info-scroller">
          <div onClick={slideLeft} className="work-info-slider">
            <FontAwesomeIcon size="lg" icon={faChevronLeft} />
          </div>
          <div id="slider" className="display-info-images-container">
            {workInfo?.images.map((image, index) => {
              return (
                <img
                  className="display-info-images"
                  key={index}
                  src={image}
                  alt={workInfo?.title}
                />
              );
            })}
          </div>
          <div onClick={slideRight} className="work-info-slider">
            <FontAwesomeIcon size="lg" icon={faChevronRight} />
          </div>
        </div>
        <div>
          <a href={workInfo?.links[0]} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              className="work-info-links"
              size="lg"
              icon={faGithub}
            />
          </a>
          <a href={workInfo?.links[1]} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              className="work-info-links"
              size="lg"
              icon={faLink}
            />
          </a>
        </div>
        <div style={{ fontSize: "1.3em", padding: 5 }}>
          Tech stack used for this project
        </div>
        <div className="work-info-tech" style={{ color: "#9DE6F5" }}>
          {workInfo?.tech.split("and")[0]}
          <span style={{ color: "white", paddingLeft: 5, paddingRight: 5 }}>
            and
          </span>
          {workInfo?.tech.split("and")[1]}
        </div>
        {workInfo?.description?.map((desc, index) => {
          return (
            <div key={index} className="work-info-decription">
              {desc}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WorkDisplay;
