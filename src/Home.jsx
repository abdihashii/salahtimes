import { LocationSelector } from './Components/LocationSelector/LocationSelector';
import { SalahTimes } from './Components/SalahTimes/SalahTimes';
import { MoreSalahTimes } from './Components/MoreSalahTimes/MoreSalahTimes';
import SalahTimesContextProvider from './Contextes/SalahTimesContext';
// import { CityAndTimeDisplay } from './Components/CityAndTimeDisplay/CityAndTimeDisplay';
import { Title } from './Components/Title/Title';

function App() {
  return (
    <SalahTimesContextProvider>
      <div className="salah-container">
        <Title />

        <LocationSelector />

        {/* <CityAndTimeDisplay /> */}

        <SalahTimes />

        <MoreSalahTimes />
      </div>
    </SalahTimesContextProvider>
  );
}

export default App;
