import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "../../components/layers/Container";
import LeftPart from "../../components/home_components/leftpart";
import RightPart from "../../components/home_components/rightpart";
import PostPart from "../../components/home_components/postpart";
const Home = () => {

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="grid grid-cols-[1.5fr_3fr_1.5fr] mt-10 gap-x-7">
        <div>
           <LeftPart />
        </div>
        <div><PostPart /></div>
        <div>
          <RightPart />
        </div>
      </div>
    </>
  );
};

export default Home;
