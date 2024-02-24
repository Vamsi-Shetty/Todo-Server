const express = require('express');
const app = express();
require('dotenv').config();

app.get('/test', (req, res) => {
    res.send("hi there");
})

app.get('/login', (req, res) => {
    res.send('<h1>Login page</h1>')
})

app.get('/signup', (req, res) => {
    res.send('<h2>Signup page</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});