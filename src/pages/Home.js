import React from "react";
import TireProfile from "../components/TireProfile";
import tireData from "../data/tireInfo.json";

const data = tireData;
function Home(props) {
  return (
    <div>
      {data.tireProfile.map((items, index) => {
        return <h2>{items.name}</h2>;
      })}
    </div>
  );
}

export default Home;
