import { atom } from 'jotai';
import type { PrayerTimes, Input, Coordinates } from '../types/prayerTimeTypes';

export const coordinatesAtom = atom<Coordinates | null | string>({
  lat: null,
  lng: null,
});
export const locationLoadingAtom = atom(false);

export const inputAtom = atom<Input>({
  label: '',
});

export const prayerTimesAtom = atom<PrayerTimes | null | string>(null);
