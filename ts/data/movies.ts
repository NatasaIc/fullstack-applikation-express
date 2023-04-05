export interface IMovie {
  id?: number;
  title: string;
  year: number;
  rating: number;
  genres: string;
  poster: string;
}

export const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    genres: "Drama",
    poster: "",
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    genres: "Crime|Drama",
    poster: "",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.3,
    genres: "Action|Drama|Crime",
    poster: "",
  },
  {
    id: 4,
    title: "The Godfather II",
    year: 1974,
    rating: 9,
    genres: "Crime|Drama",
    poster: "",
  },
  {
    id: 5,
    title: "12 Angry Men",
    year: 1957,
    rating: 9,
    genres: "Crime|Drama",
    poster: "",
  },
  {
    id: 6,
    title: "Schindler´s list",
    year: 1993,
    rating: 9,
    genres: "Biography|Drama|History",
    poster: "",
  },
  {
    id: 7,
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    rating: 9,
    genres: "Action|Drama|Adventure",
    poster: "",
  },
  {
    id: 8,
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    genres: "Crime|Drama",
    poster: "",
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
    year: movie.year,
    rating: movie.rating,
    genres: movie.genres,
    poster: movie.poster
  })
}

export const update = (id: string, movie: IMovie) => {
  const parsedId = parseInt(id)

  const i = movies.findIndex(c => c.id === parsedId)

  movies[i].title = movie.title
  movies[i].year = movie.year
  movies[i].rating = movie.rating
  movies[i].genres = movie.genres
  movies[i].poster = movie.poster
}

export const deleteBuId = (id: string) => {
  const parsedId = parseInt(id);

  const i = movies.findIndex(c => c.id === parsedId)
  movies.splice(i, 1)
}
