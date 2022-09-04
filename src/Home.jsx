import { LocationSelector } from './Components/LocationSelector/LocationSelector';
import { SalahTimes } from './Components/SalahTimes/SalahTimes';
import { MoreSalahTimes } from './Components/MoreSalahTimes/MoreSalahTimes';
import SalahTimesContextProvider from './Contextes/SalahTimesContext';
import { CityAndTimeDisplay } from './Components/CityAndTimeDisplay/CityAndTimeDisplay';

function App() {
  return (
    <SalahTimesContextProvider>
      <div className="container">
        <div className="box mt-6">
          <LocationSelector />

          <CityAndTimeDisplay />

          <SalahTimes />

          <MoreSalahTimes />
        </div>
      </div>
    </SalahTimesContextProvider>
  );
}

export default App;
