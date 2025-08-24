const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;

app.get('/orders/:orderId', (req, res) => {
  const { orderId } = req.params;
  res.json({msg: `Details of order ${orderId}`});
});

app.listen(PORT, () => {
  console.log(`Order server is running on port ${PORT}`);
});