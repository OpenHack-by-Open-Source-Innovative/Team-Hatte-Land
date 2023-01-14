import { Fragment } from "react";
import LocationsSummary from "./LocationsSummary";
import AvailableLocations from "./AvailableLocations";

const Locations = () => {
  return (
    <Fragment>
      <LocationsSummary/>
      <AvailableLocations/>
    </Fragment>
  );
};

export default Locations;
