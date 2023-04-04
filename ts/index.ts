import express  from "express";
const exhbs = require("express-handlebars");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// HANDLEBARS //
app.engine(
    "hbs",
    exhbs.engine({
        extname: ".hbs",
        defaultLayout: "main",
    })
);
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("home");
});

/// SHOW PAGE WITH ALL MOVIES ///
app.get("/movies", async (req, res) => {
//make constant to getAll mivies
    res.render("movies-list", { })
});

// SAVE A NEW MOVIE //
app.post("/new-movie", async (req, res) => {
//make constant for movie object and then req body.
    res.redirect("/movies");
});

// SHOW A PAGE WITH ONE MOVIE //



app.listen(8008, () => {
    console.log("http://localhost:8008/");
});