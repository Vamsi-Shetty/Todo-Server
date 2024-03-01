const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();

app.use(cors());

app.get('/', (req, res) => {
    res.send('<h2>Home Page</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});