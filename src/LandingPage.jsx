import react from 'react'
import reactDOM from 'react-dom/client'
import './LandingPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar'
import HeroSection from './components/heroSection';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeroSection/>
    </>
  )
}

export default App;
