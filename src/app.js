const exprees = require('express');
require('dotenv').config();

const PORT = process.env.PORT;

const app = exprees();

app.use(exprees.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});