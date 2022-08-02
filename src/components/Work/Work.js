import { useState } from "react";
import WorkApp from "../WorkApp/WorkApp";
import WorkDisplay from "./WorkDisplay/WorkDisplay";
import { workData } from "../../libs/data";

function Work() {
  const [displayOpen, setDisplayOpen] = useState(false);
  const [workInfo, setWorkInfo] = useState();

  const displayChange = (id) => {
    if (id !== undefined) {
      setWorkInfo(workData[id]);
    }

    setDisplayOpen(!displayOpen);
  };

  return (
    <div
      id="work"
      className={displayOpen ? "main-work work-open" : "main-work work-closed"}
    >
      <div className="main-work-title">work</div>
      <div className="main-work-body">
        <div className="main-work-text">
          Here's some of my most recent work which includes personal and team
          projects.
        </div>
        <WorkDisplay
          displayChange={displayChange}
          displayOpen={displayOpen}
          workInfo={workInfo}
        />
        <div className="main-work-container">
          <WorkApp displayChange={displayChange} />
        </div>
      </div>
    </div>
  );
}

export default Work;
