const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;

app.get('/orders', (req, res) => {
  res.json({msg: `List of all orders`});
});

app.listen(PORT, () => {
  console.log(`Order server is running on port ${PORT}`);
});