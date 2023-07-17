import PrayerTimesTitle from './components/prayerTimesTitle';
import LocationSelector from './components/locationSelector';

export default function Home() {
  return (
    <section
      className="shadow-bg_layer mb-14 flex min-h-screen flex-col bg-cover bg-no-repeat text-center text-white"
      // style={{
      //   backgroundImage: `url(${masjidBackground})`,
      // }}
    >
      <PrayerTimesTitle />

      <LocationSelector />

      {/* <CurrentTime /> */}

      {/* <PrayerTimes /> */}
    </section>
  );
}
