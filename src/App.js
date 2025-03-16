import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Details from './components/Details';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Contact from'./components/Contact';

function App() {
  return (
    <div className="App">
      <Header />

      {/* Sections with IDs for smooth scrolling */}
      <main className="pt-16"> {/* Padding to prevent content hiding under fixed header */}
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="details"><Details /></section>
        <section id="resume"><Resume /></section>
         <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
