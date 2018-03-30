const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 5000;

app.get('/api/hello',cors(), (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));