const Resolvers = {
  Query: {
    firstSchema: () => "hi GraphQL Node.js",
    secondSchema: (_, { input1, input2 }) => secondSchema({ input1, input2 }),
    movieSchema: () => movieScehma()
  },
  Mutation: {
    setMovieId: (_, { id }) => setMovieId({ id })
  }
};

let movie = {
  id: 0,
  title: "신비한 동물 사전",
  description: "신비한 동물들과 마법사의 어행"
};

const secondSchema = ({ input1, input2 }) => {
  return `input1: ${input1}, input2: ${input2}`;
};

const setMovieId = ({ id }) => {
  movie.id = id;
  return movie;
};

const movieScehma = () => {
  return movie;
};

export default Resolvers;
