import { Fragment } from "react";
import Header from "./components/Layout/Header.js";
import Locations from "./components/Locations/Locations.js";

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Locations />
      </main>
    </Fragment>

  );
}

export default App;
