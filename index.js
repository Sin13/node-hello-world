const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello World!!.ppoooop');
});

app.listen(process.env.PORT || 3001, () => {
  console.log('Server is running');
});
