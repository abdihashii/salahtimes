import { atom } from 'jotai';
import type { PrayerTimes } from '../types/prayerTimeTypes';

export const coordinatesAtom = atom({ lat: null, lng: null });
export const locationLoadingAtom = atom(false);

export const inputAtom = atom({
  label: 'Aurora, IL',
});

export const prayerTimesAtom = atom<PrayerTimes | null>(null);
