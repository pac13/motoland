import './Styles/App.scss';
import Navbar from './components/NavBar/Navbar';
import { Main } from './components/Main';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <div className='title'>
        <h2>Elige la moto de tus sueños</h2>
      </div>
      <div>
        <Main />
      </div>
    </div>
    
  );
}

export default App;
