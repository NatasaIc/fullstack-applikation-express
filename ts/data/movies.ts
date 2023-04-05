export interface IMovie {
  id?: number;
  title: string;
  releaseDate: number;
}

const movies = [
  {
    id: 1,
    title: "Movie",
    releaseDate: "2023",
  },
];

export const getAll = () => {
  return movies;
};

export const findById = (id: string) => {
  const parsedId = parseInt(id);

  const movie = movies.find((c) => c.id === parsedId);
  return movie;
};
