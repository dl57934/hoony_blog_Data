import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    getMovies(rating: 6.0, limit: 30) {
      title
      rating
      description_full
    }
  }
`;

export const TEST = ({ movie_id }) => gql`
  {
    getDetailMovie(movie_id:${movie_id}) {
      title
      id
      rating
    }
  }
`;
