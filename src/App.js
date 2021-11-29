
import './App.css';
import Home from'./pages/home/Home'
import Navbar from './components/navbar/Navbar';
import Announcement from './components/Announcement';
import SliderBar from './components/sliderbar/SliderBar';

function App() {
  return (
    <div className="App">
      <Announcement />
      <Navbar />
      <SliderBar />
    </div>
  );
}

export default App;
