const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let properties = [];

app.get('/properties', (req, res) => {
  res.json(properties);
});

app.post('/properties', (req, res) => {
  const property = req.body;
  properties.push(property);
  res.status(201).json({ message: 'Property added', property });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
