import { Loader2 } from 'lucide-react';

export default function LoadingAboutPage() {
	return (
		<main className="flex flex-grow flex-col items-center justify-center">
			<h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white">
				<Loader2 size={150} className="animate-spin text-green-dark" />
			</h1>
		</main>
	);
}
