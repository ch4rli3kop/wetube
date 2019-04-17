import express from "express"
const app = express();
const PORT = 4000;


const handleListening = () =>
    console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send('Hello from home');

const handleProfile = (req, res) => res.send("You are on my profile!");

const betweenHome = (req, res, next) => {
    console.log("HIHI i'm between HOME");
    next();
}

const betweenTwo = (req, res, next) => {
    console.log("i'm two!");
    next()
}

app.get("/", betweenHome, betweenTwo, handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
