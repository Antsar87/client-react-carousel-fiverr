import Carousel from './components/Carousel';
import CarouselResponsive from './components/CarouselResponsive';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div
      className="min-h-svh grid w-full"
      style={{
        gridTemplateRows: 'auto 1fr auto',
        gridTemplateColumns: '100%',
        gap: '2rem',
      }}
    >
      <Header />
      <main>
        <div className="md:hidden">
          <CarouselResponsive />
        </div>

        <div className="hidden md:block">
          <Carousel />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
