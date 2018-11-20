import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./quries";

const Home = () => {
  return (
    <Query query={HOME_PAGE}>
      {({ error, loading, data }) => {
        if (error) console.log(error);
        if (loading) return "loading...";
        console.log(data.getMovies);
        return "getData";
      }}
    </Query>
  );
};

export default Home;
