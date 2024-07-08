import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './componenets/Appbar';
import ImageCarousel from './componenets/ImageCarousel';
import Category from './componenets/Category';
import BestSelling from './componenets/BestSelling';

function App() {
  return (
    // <div className="App">
    // </div>
    <>
      <ResponsiveAppBar />
      <ImageCarousel/>
      <Category/>
      <BestSelling />
    </>
  );
}

export default App;