import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "../../components/layers/Container";

const Home = () => {

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="grid grid-cols-[1fr_3fr_1fr]">
        <div>Left</div>
        <div>Middle</div>
        <div>Right</div>
      </div>
    </>
  );
};

export default Home;
