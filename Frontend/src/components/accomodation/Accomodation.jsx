import React, { useEffect, useState } from "react";
import "../../css/Accomodation.css";
import ProgressSteps from "../ProgressSteps";
import MyAccomodation from "./MyAccomodation";
import { Link } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";
import { STATIC_ACCOMODATION } from "../../data/staticData";

const Accomodation = () => {
  const [accomodation, setAccomodation] = useState(() => {
    try {
      const saved = localStorage.getItem("user_accommodations");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return STATIC_ACCOMODATION;
  });
  const [loading] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("user_accommodations");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setAccomodation(parsed);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <>
      <ProgressSteps accomodation />
      <div className="accom-container">
        <Link to="/accommodationform">
          <button className="add-new-place">+ Add new place</button>
        </Link>
        {loading && <LoadingSpinner />}
        {accomodation.length === 0 && !loading && (
          <p>Accomodation not available</p>
        )}
        {accomodation.length > 0 && !loading && (
          <MyAccomodation accomodation={accomodation} loading={loading} />
        )}
      </div>
    </>
  );
};

export default Accomodation;
