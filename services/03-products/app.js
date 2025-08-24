const express = require('express');
const app = express();
const PORT = process.env.PORT || 4003;

app.get('/products', (req, res) => {
  res.json({msg: 'List of products'});
});

app.listen(PORT, () => {
  console.log(`Product server is running on port ${PORT}`);
});

