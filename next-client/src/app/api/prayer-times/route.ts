import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const lat = url.searchParams.get('lat');
  const lng = url.searchParams.get('lng');
  const date = url.searchParams.get('date');
  const method = url.searchParams.get('method');

  try {
    const resp = await fetch(
      `http://api.aladhan.com/v1/timings/${date}?latitude=${lat}&longitude=${lng}&method=${method}`
    );
    const {
      data: { timings },
    } = await resp.json();

    // const nextPrayer
    return new Response(JSON.stringify(timings), {
      status: resp.status,
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
