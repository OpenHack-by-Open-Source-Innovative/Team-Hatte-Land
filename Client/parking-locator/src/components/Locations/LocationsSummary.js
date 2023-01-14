import classes from "./LocationsSummary.module.css";

const LocationsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Pick a parking spot, without driving around!</h2>
      <p>
        Choose an available parking spot near you, without having to drive around.
      </p>
      <p>
        All the available parking spots are updated in near-real time, so it is guaranteed that there will be a free slot for your vehicle.
      </p>
    </section>
  );
};

export default LocationsSummary;
