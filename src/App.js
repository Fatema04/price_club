import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='text-2xl text-green-600 font-bold'>Hello from React</h1>
      <Pricing></Pricing>

    </div>
  );
}

export default App;
