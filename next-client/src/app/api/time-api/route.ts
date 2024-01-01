import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const timeZone = url.searchParams.get('timeZone');

  try {
    const apiResponse = await fetch(
      `https://timeapi.io/api/Time/current/zone?timeZone=${timeZone}`
    );
    const data = await apiResponse.json();

    return new Response(JSON.stringify(data), {
      status: apiResponse.status,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Error fetching data from Time API' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
