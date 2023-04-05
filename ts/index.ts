import express from "express";
const exphbs = require("express-handlebars");

import * as moviesData from "./data/movies";
import { IMovie } from "./data/movies";

const app = express();

// Setting up handlebars

app.engine(
  "hbs",
  exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
  })
);
app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/movies", async (req, res) => {
  const movies = moviesData.getAll();

  res.render("movies-list", { movies });
});

app.post('/new-movie', async (req, res) => {
  const newMovie: IMovie = {
    title: req.body.title,
    year: req.body.year,
    rating: req.body.title,
    genres: req.body.genres,
    poster: req.body.postter
  }

  moviesData.add(newMovie)

  res.redirect("/movies")
});



app.listen(8008, () => {
  console.log("http://localhost:8008/");
});
