import DUMMY_LOCATIONS from "./dummy-locations";
import Card from "../UI/Card";
import LocationItem from "./LocationItem/LocationItem";
import classes from "./AvailableLocations.module.css";

const AvailableLocations = () => {
  return (
    <section className={classes.locations}>
      <Card>
        <ul>
          {DUMMY_LOCATIONS.map((location) => (
            <LocationItem
              id={location.id}
              key={location.id}
              name={location.name}
              description={location.description}
              totalAvailable={location.totalAvailable}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableLocations;
