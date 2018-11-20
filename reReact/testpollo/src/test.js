import React from "react";
import { TEST } from "./quries";
import { Query } from "react-apollo";

const test = ({
  match: {
    params: { movieId }
  }
}) => {
  console.log(movieId);
  const movie_id = 9664;
  return (
    <Query query={TEST({ movie_id })}>
      {({ error, loading, data }) => {
        if (loading) return "loading";
        console.log(data);
        return "getData";
      }}
    </Query>
  );
};

export default test;
