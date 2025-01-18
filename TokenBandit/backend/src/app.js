const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const nftRoutes = require('./routes/nftRoutes');
const tokenRoutes = require('./routes/tokenRoutes');

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/nft', nftRoutes);
app.use('/api/token', tokenRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

