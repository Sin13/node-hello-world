const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello World... testing WAT-1475');
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Server is running');
});
