import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "../../components/layers/Container";
import LeftPart from "../../components/home_components/leftpart";

const Home = () => {

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="grid grid-cols-[1fr_3fr_1fr] mt-6">
        <div>
           <LeftPart />
        </div>
        <div>Middle</div>
        <div>Right</div>
      </div>
    </>
  );
};

export default Home;
