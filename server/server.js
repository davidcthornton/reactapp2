const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());


app.get('/', (req, res) => {
  res.send('Dave is good looking');
});

app.listen(port, () => console.log('Server running on port 5000'));