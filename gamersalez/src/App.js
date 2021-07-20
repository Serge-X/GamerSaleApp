import './App.css';
import { Searchbar } from './Components/Searchbar';

function App() {
  return (
    <div className="Main">
      <div className="Title">
        <p>A resource to find games</p>
        <p id="SiteName">CHEAPGAMERZ</p>
        <p>At your price</p>
      </div>
      <Searchbar />
    </div>
  );
}

export default App;
