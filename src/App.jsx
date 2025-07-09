import Navbar from './components/Navbar';
import ItemList from './components/Itemlist';
import About from './components/about';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <ItemList />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
