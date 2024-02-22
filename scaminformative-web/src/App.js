
import Home from './components/Home.js'
import Navbar from './components/Navbar.js';
import HowHelp from './components/HowHelp.js';
import HowHelp2 from './components/HowHelp2.js';
import Scam from './components/TypeOfScams.js';
import Carousel_page from './components/ScamsCarousel.js';

function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   {/* <HowHelp/> */}
   <HowHelp2/>
   <Scam/>
   <Carousel_page/>
   </>
  );
}

export default App;
