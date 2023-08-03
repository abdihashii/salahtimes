import { CalculationMethod, CalculationParameters } from 'adhan';
import { getPrayerTimes } from './utils';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const getNumberQueryParam = (param: any): number | null => {
  if (typeof param === 'string') {
    const num = parseFloat(param);
    if (!isNaN(num)) return num;
  }

  return null;
};

const getCalculationMethodParam = (method: any): CalculationParameters => {
  if (
    typeof method === 'string' &&
    typeof CalculationMethod[method] === 'function'
  ) {
    return CalculationMethod[method]();
  }

  // Default to Muslim World League
  return CalculationMethod.MuslimWorldLeague();
};

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

  console.log(prayerTimes);

  res.send(prayerTimes);
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
