export type TPlace = {
	name: string;
	lat: number | null;
	lon: number | null;
	formatted_address: string;
	timezone?: string;
	currentTimeInLocation?: string;
};

export type TPrayerTime = {
	Fajr: string | null;
	Sunrise: string | null;
	Dhuhr: string | null;
	Asr: string | null;
	Maghrib: string | null;
	Isha: string | null;
	nextPrayer?: {
		prayer: string;
		time: string;
	} | null;
};
