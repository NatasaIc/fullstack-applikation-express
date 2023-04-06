import express from "express";
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");

import * as moviesData from "./data/movies";
import { IMovie } from "./data/movies";

// Setting up handlebars

app.engine(
  "hbs",
  exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join("views/layouts"),
  })
);
app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    style: "home.css",
    title: "Movies Homepage",
  });
});

//All movies page
app.get("/movies", async (req, res) => {
  const movies = moviesData.getAll();
  res.render("movies-list", {
    movies,
    style: "movies-list.css",
    title: "Movies List",
    link: "https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css",
  });
});

//Show one movie page
app.get("/movies/:id", (req, res) => {
  const movie = moviesData.findById(req.params.id)
  res.render("movies-single", { 
    movie,
    // style: "movies-single.css",
  });

});

//Adding a new movie
app.post("/new-movie", async (req, res) => {
  const newMovie: IMovie = {
    title: req.body.title,
    year: req.body.year,
    rating: req.body.title,
    genres: req.body.genres,
    poster: req.body.poster,
  };

  moviesData.add(newMovie);

  res.redirect("/movies");
});

//Show a page with one movie
app.get("/movies/:id", async (req, res) => {
  const movie = moviesData.findById(req.params.id);

  res.render("movie-single", movie)
});

//Update one car 
app.post("/movies/:id/update", async (req, res) => {
  moviesData.update(req.params.id, {
    title: req.body.title,
    year: req.body.year,
    rating: req.body.title,
    genres: req.body.genres,
    poster: req.body.poster,
  })

  res.redirect("/movies")
});

//Delete a movie
app.post("/movies/:id/delete", async (req, res) => {
  moviesData.deleteById(req.params.id);

  res.redirect("/movies");
});

app.listen(8008, () => {
  console.log("http://localhost:8008/");
});
