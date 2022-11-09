import {React,useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './style/all.min.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route,useLocation} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Home } from "./home/home"
import { About } from "./about/about"
import { Menu } from "./share_components/menu"
import { Footer } from "./share_components/footer"
import { Portfilio } from './portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
function App (){
  let location = useLocation()
  let [displayLocation,setLocation] = useState(location)
  const [transitionStage, setTransistionStage] = useState("fadeIn");
  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);
  return(
    <div
    className={`${transitionStage}`}
    onAnimationEnd={() => {
      if (transitionStage === "fadeOut") {
        setTransistionStage("fadeIn");
        setLocation(location);
      }
    }}
  >
    <Routes location={displayLocation}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfilio />}/>
    </Routes>
    </div>
  )
}
root.render(
  <BrowserRouter>
    <App />
    <Menu />
    <Footer />
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
