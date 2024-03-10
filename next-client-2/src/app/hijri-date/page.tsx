import DateObject from 'react-date-object';
import arabic from 'react-date-object/calendars/arabic';
import arabic_en from 'react-date-object/locales/arabic_en';

export default function HijriDatePage() {
  const date = new DateObject({
    format: 'MMMM D, YYYY',
    locale: arabic_en,
    calendar: arabic,
  });

  return (
    <main className="my-24 flex flex-grow flex-col items-center justify-center gap-6">
      <h1 className="text-4xl lg:text-6xl">{date.format()}</h1>

      <h2 className="text-lg lg:text-xl">
        Today&apos;s Gregorian Date: {new DateObject().format('MMMM DD, YYYY')}
      </h2>
    </main>
  );
}
