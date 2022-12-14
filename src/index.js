const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.options('*', cors())
app.use(express.static('public'));
app.listen(process.env.PORT || 3000);
