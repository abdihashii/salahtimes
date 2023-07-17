import { useAtom, atom } from 'jotai';

// const showPredictionsAtom = atom(true);
export const coordinatesAtom = atom({ lat: null, lng: null });
export const locationLoadingAtom = atom(false);

export const inputAtom = atom({
  city_name: 'Aurora, IL',
});

export const prayerTimesAtom = atom(null);
