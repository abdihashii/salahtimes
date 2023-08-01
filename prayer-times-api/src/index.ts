import { CalculationMethod } from 'adhan';
import { getPrayerTimes } from './utils';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  const name = req.body.name || 'World';

  res.send(`Hello, ${name}!`);
});

app.get('/get-prayer-times', (req, res) => {
  const date = req.body.date ? new Date(req.body.date) : new Date();
  const lat = req.body.lat;
  const lng = req.body.lng;
  const calcMethod = req.body.method
    ? req.body.method
    : CalculationMethod.MuslimWorldLeague();

  const prayerTimes = getPrayerTimes(lat, lng, date, calcMethod);

  res.send(prayerTimes);
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});

const main = () => {
  console.log('hello world');

  const date = new Date(2023, 6, 26);
  const lat = 41.7605849;
  const lng = -88.3200715;
  const calcMethod = CalculationMethod.MuslimWorldLeague();

  const prayerTimes = getPrayerTimes(lat, lng, date, calcMethod);

  console.log(prayerTimes);
};

// main();
