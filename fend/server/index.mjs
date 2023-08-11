const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express;
app.use(express());

const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 8080;

app.listen(`Server is listening on port: ${port}`);
