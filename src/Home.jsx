import { LocationSelector } from './Components/LocationSelector/LocationSelector';
import { SalahTimes } from './Components/SalahTimes/SalahTimes';
import SalahTimesContextProvider from './Contextes/SalahTimesContext';

function App() {
  return (
    <SalahTimesContextProvider>
      <div>
        <div
          className="container is-fullhd box mt-6"
          style={{ width: '800px' }}
        >
          <LocationSelector />

          <SalahTimes />
        </div>
      </div>
    </SalahTimesContextProvider>
  );
}

export default App;
