import React from "react";
import TopTable from "../components/TopTable";
import TireProfile from "../components/TireProfile";
import MiddleTable from "../components/MiddleTable";

function Home(props) {
  return (
    <>
      <TopTable />
      <MiddleTable />
      <TireProfile />
    </>
  );
}

export default Home;
