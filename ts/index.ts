import express from "express";
const app = express();

import * as moviesData from "./data/movies";

app.get("/movies", async (req, res) => {
  const movies = moviesData.getAll();

  res.render("movies-list", { movies });
});

app.listen(8008, () => {
  console.log("http://localhost:8008/");
});
