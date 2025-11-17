'use strict';

const express = require('express');
const app = express();

app.get('/math/circle/:r', (req, res) => {
  const r = parseFloat(req.params.r);

  if (isNaN(r) || r < 0) {
    return res.status(400).json({ error: 'Invalid radius' });
  }

  const area = (Math.PI * r * r).toFixed(2);            // pole
  const circumference = (2 * Math.PI * r).toFixed(2);   // obwód

  res.json({
    area,
    circumference   
  });
});

//TODO2


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});