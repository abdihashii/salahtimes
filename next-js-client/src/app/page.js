import PrayerTimesTitle from './components/prayerTimesTitle';
import LocationSelector from './components/locationSelector';
import PrayerTimes from './components/prayerTimes';

export default function Home() {
  return (
    <section className="shadow-bg_layer mb-14 flex min-h-screen flex-col bg-cover bg-no-repeat p-4 text-center text-white sm:p-10 lg:p-20">
      <PrayerTimesTitle />

      <LocationSelector />

      {/* <CurrentTime /> */}

      <PrayerTimes />
    </section>
  );
}
