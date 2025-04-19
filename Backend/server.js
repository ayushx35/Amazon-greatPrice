const express = require('express');
const cors = require('cors');
const { scrapeAmazon } = require('./scraper');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/search', async (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'Query is required' });
  try {
    const data = await scrapeAmazon(q);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch data from Amazon' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
