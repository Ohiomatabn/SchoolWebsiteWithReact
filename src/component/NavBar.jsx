import { useState } from "react";
import { currentDateAndTime } from "./currentTime";

export function NavBar() {
  const [currentDate, setCurrentDate] = useState(currentDateAndTime());

  setInterval(() => {
    setCurrentDate(currentDateAndTime);
  }, 1000);

  return (
    <nav className="navbar">
      <div className="container flex">
        <div className="school-name">
          <i className="fa fa-bars js-show"></i>
          <h2>World Best Sec Sch</h2>
        </div>
        <div className="current-date-time">
          <p className="js-now">{currentDate}</p>
        </div>
      </div>
    </nav>
  );
}
