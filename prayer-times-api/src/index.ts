import {
  getPrayerTimes,
  getNumberQueryParam,
  getCalculationMethodParam,
} from './utils';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// -- Middlewares --
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  const name = req.body.name || 'World';

  res.send(`Hello, ${name}!`);
});

app.get('/get-prayer-times', (req, res) => {
  const date =
    typeof req.query.date === 'string' ? new Date(req.query.date) : new Date();
  const lat = getNumberQueryParam(req.query.lat);
  const lng = getNumberQueryParam(req.query.lng);

  // Check if lat and lng are valid numbers
  if (lat === null || lng === null) {
    res.status(400).send('Invalid latitude or longitude');
    return;
  }

  const calcMethod = getCalculationMethodParam(req.query.calcMethod);

  const prayerTimes = getPrayerTimes(lat, lng, date, calcMethod);

  res.send(prayerTimes);
});

app.listen(3001, () => {
  console.log('listening on port 3001!');
});
