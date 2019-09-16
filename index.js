//const express = require("express");
import express from "express"
const app = express();
const PORT = "4000";

// function handleListening(){
//     console.log(`Listening on : http://localost:${PORT}`);
// }

const handleListening = () => console.log(`Listening on : http://localost:${PORT}`);

// function handleHome(req, res){
//     res.send("Hello, world!");
// }

const handleHome = (req, res) => res.send("Hello, world!");

// function handleProfile(req, res){
//     res.send("You are in profile");
// }

const handleProfile = (req, res) => res.send("You are in profile");

app.get("/", handleHome);
app.get("/profile",handleProfile);
app.listen(PORT, handleListening);