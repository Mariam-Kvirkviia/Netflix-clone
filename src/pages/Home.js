import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import Request from "../components/Request";
const HomePage = () => {
  return (
    <>
      <Main />
      <Row rowId="1" title="Up coming" fetchURL={Request.requestUpcoming} />
      <Row rowId="2" title="Horror" fetchURL={Request.requestHorror} />
      <Row rowId="3" title="Top rated" fetchURL={Request.requestTopRated} />
      <Row rowId="4" title="Trending" fetchURL={Request.requestTrending} />
      <Row rowId="5" title="Popular" fetchURL={Request.requestPopular} />
    </>
  );
};

export default HomePage;
