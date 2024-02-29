const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();

app.use(cors());

app.get('/test', (req, res) => {
    res.send('<h2>Test</h2>');
})

app.get('/', (req, res) => {
    res.send('<h2>Home Page</h2>')
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