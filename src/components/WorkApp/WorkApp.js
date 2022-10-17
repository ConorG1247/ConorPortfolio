import { data } from "../../libs/data";

function WorkApp({ displayChange }) {
  return (
    <div className="main-work-display">
      {data?.map((arr, index) => {
        return (
          <div
            key={index}
            onClick={() => displayChange(index)}
            className="main-work-item-container"
          >
            <div className="main-work-display-title">{arr.title}</div>
            <div className="main-work-display-sub">{arr.tech}</div>
            <div className="main-work-image">
              <img src={arr.image} alt={arr.title}></img>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WorkApp;
