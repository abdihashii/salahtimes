import { createBucketClient } from '@cosmicjs/sdk';

export const cosmic = createBucketClient({
	bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
	readKey: process.env.COSMIC_READ_KEY as string,
});
