import { useEffect, useState } from "react";
import navLevels from "./nav-levels";
import "./styles.css";

const filterUniqueObjValues = (arr, key) =>
  [...new Map(arr.map((item) => [item[key], item])).values()].map(
    (obj) => obj[key]
  );

export const NavCard = () => {
  const [selectedTrack, setSelectedTrack] = useState("A");
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [selectedStep, setSelectedStep] = useState(1);

  const [trackObj, setTrackObj] = useState([]);
  const [levelObj, setLevelObj] = useState([]);
  const [levels, setLevels] = useState([]);
  const [steps, setSteps] = useState([]);

  // filter the track
  const filteredTrack = filterUniqueObjValues(navLevels, "Track");

  // Filter levels by track
  const filteredTrackObjs = navLevels.filter(
    (obj) => obj["Track"] === selectedTrack
  );

  useEffect(() => {
    setLevelObj(
      filteredTrackObjs
        .map((track) => track)
        .filter((obj) => obj["Track"] === selectedTrack)
    );
  }, [selectedTrack, filteredTrackObjs]);

  useEffect(() => {
    setLevelObj(
      filteredTrackObjs
        .map((track) => track)
        .filter((obj) => obj["Track"] === selectedTrack)
    );

    setLevels(filterUniqueObjValues(levelObj, "Level"));
  }, [selectedTrack]);

  // This part may need to be set as a state variable, and then updated?
  // We didn't need to do that with filteredTrackObjs though

  const filteredLevelObjs = filteredTrackObjs
    // .map((level) => level)- I think commenting this out helped?
    .filter((obj) => obj["Level"] === selectedLevel);

  // Filter Steps by Level and Track
  useEffect(() => {
    setSteps(filterUniqueObjValues(levelObj, "Step"));
  }, [levelObj, selectedLevel]);

  console.log({
    filteredTrack,
    selectedTrack,
    filteredTrackObjs,
    levels,
    selectedLevel,
    filteredLevelObjs,
    steps,
    selectedStep
  });

  return (
    <div className="nav-card">
      <form>
        <div>
          <label htmlFor="track">Track</label>
          <select
            id="track"
            value={selectedTrack}
            onChange={(e) => setSelectedTrack(e.target.value)}
          >
            {filteredTrack?.map((track) => (
              <option value={track} key={track}>
                {track}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="level">Level</label>
          <select
            id="level"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            {levels?.map((level) => (
              <option value={level} key={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="step">Step</label>
          <select
            id="step"
            value={selectedStep}
            onChange={(e) => setSelectedStep(e.target.value)}
          >
            {steps?.map((step) => (
              <option value={step} key={step}>
                {step}
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
