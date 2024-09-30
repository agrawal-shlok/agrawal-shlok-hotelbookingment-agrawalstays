import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes
import './App.css';

import Navbar from "./Components/Navbar";
import Homescreen from './Screens/Homescreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>  {/* Wrap Route in Routes */}
          <Route path="/home" element={<Homescreen />} /> {/* Use `element` instead of `component` */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
