import { atom } from 'jotai';
import type { FetchPrayerTimesError } from '../types/errorTypes';

export const fetchPrayerTimesErrorAtom = atom<FetchPrayerTimesError | null>(
  null
);
