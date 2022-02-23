import { useRef, useEffect } from "react";
import navLevels from "./nav-levels";
import "./styles.css";

const filterArr = (arr, key) =>
  [...new Map(arr.map((item) => [item[key], item])).values()].map(
    (obj) => obj[key]
  );

export const NavCard = () => {
  // filter the track
  const filteredTrack = filterArr(navLevels, "Track");
  const trackRef = useRef();
  console.log(filteredTrack, trackRef.current);

  // Filter levels by track
  const levels = filterArr(
    navLevels.map((level) => level).filter((obj) => obj[trackRef.current]),
    "Level"
  );
  const levelRef = useRef();
  console.log(levels);

  // Filter steps by track and level
  const step = useRef();

  useEffect(() => {}, [trackRef, levelRef, stepRef]);

  return (
    <div className="nav-card">
      <form>
        <div>
          <label htmlFor="track">Track</label>
          <select id="track" ref={trackRef}>
            {filteredTrack?.map((track) => (
              <option value={track} key={track}>
                {`${level["Employee Level"]} - ${level["Description"]}`}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="employeeLevel">Employee Level</label>
          <select id="employeeLevel" ref={track}>
            {navLevels?.map((level) => (
              <option
                value={level["Employee Level"]}
                key={level["Employee Level"]}
              >
                {`${level["Employee Level"]} - ${level["Description"]}`}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="employeeLevel">Employee Level</label>
          <select id="employeeLevel" ref={track}>
            {navLevels?.map((level) => (
              <option
                value={level["Employee Level"]}
                key={level["Employee Level"]}
              >
                {`${level["Employee Level"]} - ${level["Description"]}`}
              </option>
            ))}
          </select>
        </div>
      </form>

      <div>Results</div>
    </div>
  );
};

export default NavCard;
