import express from 'express';

const app = express();

app.use('/', express.static('public'));

app.listen(process.env.PORT || 5000, () => {
  console.log('Server running at http://localhost:5000');
});
