import PrayerTimesTitle from './components/prayerTimesTitle';
import LocationSelector from './components/locationSelector';
import PrayerTimes from './components/prayerTimes';

export default function Home() {
  return (
    <section className="mx-auto mt-20 flex min-h-screen w-8/12 flex-col">
      <PrayerTimesTitle />

      <LocationSelector />

      {/* <CurrentTime /> */}

      <PrayerTimes />
    </section>
  );
}
