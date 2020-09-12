const express = require('express');
const app = express();
const router = express.Router();
const port = 4000;

router.get('/', (req, res, next) => {
  res.send('Hello wolrd!');
});

app.use('/api/', router);

app.listen(port, () => {
  console.log(`express server listening at http://localhost:${port}`);
});
