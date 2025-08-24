const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/payments/:paymentId', (req, res) => {
  const { paymentId } = req.params;
  res.json({msg: `Details of payment ${paymentId}`});
});

app.listen(PORT, () => {
  console.log(`Payment server is running on port ${PORT}`);
});