export interface IMovie {
  id?: number;
  title: string;
  year: number;
  rating: string;
  genres: string;
  poster: string;
}

export const movies: IMovie[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    rating: "9.3",
    genres: "Drama",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    rating: "9.2",
    genres: "Crime|Drama",
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    rating: "9.3",
    genres: "Action|Drama|Crime",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
  },
  {
    id: 4,
    title: "The Godfather II",
    year: 1974,
    rating: "9",
    genres: "Crime|Drama",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  },
  {
    id: 5,
    title: "12 Angry Men",
    year: 1957,
    rating: "9",
    genres: "Crime|Drama",
    poster:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
  },
  {
    id: 6,
    title: "Schindlers list",
    year: 1993,
    rating: "9",
    genres: "Biography|Drama|History",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  },
  {
    id: 7,
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    rating: "9",
    genres: "Action|Drama|Adventure",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 8,
    title: "Pulp Fiction",
    year: 1994,
    rating: "8.9",
    genres: "Crime|Drama",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
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
  const lastMovie = movies.slice(-1)[0];

  let id = lastMovie?.id;
  id = id ? id + 1 : 1;

  movies.push({
    id,
    title: movie.title,
    year: movie.year,
    rating: movie.rating,
    genres: movie.genres,
    poster: movie.poster,
  });
};

export const update = (id: string, movie: IMovie) => {
  const parsedId = parseInt(id);

  const i = movies.findIndex((c) => c.id === parsedId);

  movies[i].title = movie.title;
  movies[i].year = movie.year;
  movies[i].rating = movie.rating;
  movies[i].genres = movie.genres;
  movies[i].poster = movie.poster;
};

export const deleteById = (id: string) => {
  const parsedId = parseInt(id);

  const i = movies.findIndex((c) => c.id === parsedId);
  movies.splice(i, 1);
};
