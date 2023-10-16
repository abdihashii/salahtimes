export type PrayerTimes = {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  sunset: string;
  maghrib: string;
  isha: string;
};

export type Input = {
  label: string;
  value?: {
    description: string;
    matched_substrings: [
      {
        length: number;
        offset: number;
      }
    ];
    place_id: string;
    reference: string;
    structured_formatting: {
      main_text: string;
      main_text_matched_substrings: [
        {
          length: number;
          offset: number;
        }
      ];
      secondary_text: number;
    };
    terms: [
      {
        offset: 0;
        value: string;
      },
      {
        offset: 13;
        value: string;
      },
      {
        offset: 17;
        value: string;
      }
    ];
    types: ['locality', 'political', 'geocode'];
  };
};

export type Coordinates = {
  lat: number | null;
  lng: number | null;
};
