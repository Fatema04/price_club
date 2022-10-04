
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';
import Recharts from './components/Recharts/Recharts';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='text-2xl text-green-600 font-bold'>Hello from React</h1>
      <Pricing></Pricing>
      <Recharts></Recharts>

    </div>
  );
}

export default App;
