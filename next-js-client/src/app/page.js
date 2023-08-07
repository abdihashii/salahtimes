import PrayerTimesTitle from './components/prayerTimesTitle';
import LocationSelector from './components/locationSelector';
import PrayerTimes from './components/prayerTimes';

export default function Home() {
  return (
    <section className="mx-auto mt-20 flex min-h-screen w-11/12 flex-col lg:w-8/12">
      <PrayerTimesTitle />

      <LocationSelector />

      {/* <CurrentTime /> */}

      <PrayerTimes />
    </section>
  );
}
