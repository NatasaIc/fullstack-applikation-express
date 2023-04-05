export interface IMovie {
  id?: number;
  title: string;
  genres: string;
}

export interface IMovie {
  id?: number;
  title: string;
  genres: string;
}

export const movies = [
  {
    id: 1,
    title: "Tupac: Resurrection",
    genres: "Documentary",
  },
  {
    id: 2,
    title: "Africa addio",
    genres: "Documentary",
  },
  {
    id: 3,
    title: "Jesse Stone: Night Passage",
    genres: "Crime|Drama|Mystery",
  },
  {
    id: 4,
    title: "Deewaar",
    genres: "Action|Crime|Drama|Thriller",
  },
  {
    id: 5,
    title: "General's Daughter, The",
    genres: "Crime|Drama|Mystery|Thriller",
  },
  {
    id: 6,
    title: "Big Blue, The (Grand bleu, Le)",
    genres: "Adventure|Drama|Romance",
  },
  {
    id: 7,
    title: "Samurai Rebellion (Jôi-uchi: Hairyô tsuma shimatsu)",
    genres: "Action|Drama",
  },
  {
    id: 8,
    title: "Sullivan's Travels",
    genres: "Adventure|Comedy|Romance",
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

export const add = (movie: IMovie) => {
  const lastMovie = movies.slice(-1)[0]

  let id = (lastMovie?.id);
  id = id ? id + 1 : 1;

  movies.push({
    id,
    title: movie.title,
    genres: movie.genres
  })
}

export const update = (id: string, movie: IMovie) => {
  const parsedId = parseInt(id)

  const i = movies.findIndex(c => c.id === parsedId)

  movies[i].title = movie.title
  movies[i].genres = movie.genres
}

export const deleteBuId = (id: string) => {
  const parsedId = parseInt(id);

  const i = movies.findIndex(c => c.id === parsedId)
  movies.splice(i, 1)
}
