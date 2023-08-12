import './App.css';
import HomePage from './components/home/HomePage';
import SideBar from './components/side_bar/SideBar';
import PlayerStream from './components/player/PlayerStream';
function App() {
  return (
    <>
    <div className='vh-100 row'>
    <SideBar></SideBar>
    <HomePage></HomePage>

    </div>

    </>
  );
}

export default App;
