import { useEffect } from 'react';
import { LocationSelector } from './Components/LocationSelector/LocationSelector';
import { SalahTimes } from './Components/SalahTimes/SalahTimes';
import { MoreSalahTimes } from './Components/MoreSalahTimes/MoreSalahTimes';
import SalahTimesContextProvider from './Contextes/SalahTimesContext';
// import { Title } from './Components/Title/Title';
import { Logo } from './Components/Logo/Logo';

function App() {
	useEffect(() => {
		// 👇 add class to body element
		document.body.classList.add(
			'bg-contain',
			'bg-no-repeat',
			'bg-center',
			'bg-bottom',
			'pb-16'
		);
	}, []);

	return (
		<SalahTimesContextProvider>
			<div className="mx-auto w-981px">
				{/* <Title /> */}
				<Logo />

				<LocationSelector />

				<SalahTimes />

				<MoreSalahTimes />
			</div>
		</SalahTimesContextProvider>
	);
}

export default App;
