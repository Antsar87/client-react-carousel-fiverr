import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div
      className="min-h-svh grid"
      style={{ gridTemplateRows: 'auto 1fr auto', gap: '2rem' }}
    >
      <Header />
      <main>
        <Carousel />
      </main>
      <Footer />
    </div>
  );
};

export default App;
