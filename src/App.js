import { Route, Routes } from 'react-router-dom';
import Home from './components/routes/Home';
import About from './components/routes/About';
import Products from './components/routes/Products';
import Services from './components/routes/Services';
import Devisions from './components/routes/Devisions';
import Contact from './components/routes/Contact';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services' element={<Services />} />
        <Route path='/devisions' element={<Devisions />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
