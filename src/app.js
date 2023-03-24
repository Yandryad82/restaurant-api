const exprees = require('express');

const PORT = 8000;

const app = exprees();

app.use(exprees.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});