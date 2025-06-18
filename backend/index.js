const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let properties = [];

// Get all properties
app.get('/properties', (req, res) => {
  res.json(properties);
});

// Add a new property
app.post('/properties', (req, res) => {
  const property = req.body;
  properties.push(property);
  res.status(201).json({ message: 'Property added', property });
});

app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
