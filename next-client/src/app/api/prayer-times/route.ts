import { findNextPrayer } from '@/lib/utils';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const lat = url.searchParams.get('lat');
  const lng = url.searchParams.get('lng');
  const date = url.searchParams.get('date');
  const method = url.searchParams.get('method');
  const currentTime = url.searchParams.get('currentTime');

  try {
    const resp = await fetch(
      `http://api.aladhan.com/v1/timings/${date}?latitude=${lat}&longitude=${lng}&method=${method}$currentTime=${currentTime}`
    );
    const {
      data: { timings },
    } = await resp.json();

    const filteredTimings = Object.keys(timings).reduce(
      (acc, key) => {
        if (key !== 'Sunset') {
          acc[key] = timings[key];
        }
        return acc;
      },
      {} as { [key: string]: string }
    );

    // Find the nearest prayer time
    const nextPrayer = findNextPrayer(filteredTimings, currentTime as string);

    return new Response(
      JSON.stringify({
        nextPrayer,
        filteredTimings,
      }),
      {
        status: resp.status,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        message: `Error fetching data from Time API: ${error.message}`,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
