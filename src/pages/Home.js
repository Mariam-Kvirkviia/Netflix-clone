import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import Request from "../components/Request"
const HomePage = () => {
  return (
    <>
      <Main />
      <Row title="Up coming" fetchURL={Request.requestUpcoming} />
      <Row title="Horror" fetchURL={Request.requestHorror} />
      <Row title="Top rated" fetchURL={Request.requestTopRated} />
      <Row title="Trending" fetchURL={Request.requestTrending} />
      <Row title="Popular" fetchURL={Request.requestPopular} />
    </>
  );
};

export default HomePage;
