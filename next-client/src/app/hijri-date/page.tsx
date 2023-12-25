import moment from 'moment-hijri';

export default function HijriDatePage() {
  const m = moment();

  return (
    <main className="my-24 flex flex-grow flex-col items-center justify-center gap-6 font-medium">
      <h1 className="text-4xl lg:text-6xl">
        {m.locale('en').format('iMMMM iD, iYYYY')}
      </h1>

      <h2 className="text-lg lg:text-xl">
        Today&apos;s Gregorian Date: {m.locale('en').format('MMMM Do, YYYY')}
      </h2>
    </main>
  );
}
