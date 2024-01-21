const express = require('express');
const path = require('path');
const app = express();
const request = require('request');
const cors = require('cors');

// Use environment variable or default to 8080
const PORT = process.env.PORT || 8080;

// Use environment variable or default backend URL
const backendApiUrl = process.env.BACKEND_API_URL || 'https://geolocation-db.com/json/344ec440-6bfc-11eb-a0c0-b5dee9e67313';

app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/ping', (req, res) => {
  return res.send('pong');
});

app.get('/myip', (req, res) => {
    return res.json({ url: '' + backendApiUrl });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`UI App Started...`);
    console.log(`Node Server is running on port ${PORT}.`);
});
