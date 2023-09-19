import './App.css';
import Navbar from './components/Navbar';
import About from './sections/About';
import Contact from './sections/Contact';
import Home from './sections/Home';
import Testimonials from './sections/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Home/>
        <About/>
        <Testimonials/>
        <Contact/>
        <footer class="border-top">
        <p class="text-center text-muted pt-4">Copyright © 2023<a href="#" class="px-1">Mahdi jenhani .</a>All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
