import Middle from "./components/Middle/Middle";
import Destination from "./components/destination/Destination";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Questions from "./components/questions/Questions";
import Reviews from "./components/reviews/Reviews";
import Subscribe from "./components/subscribe/Subscribe";



function App() {
  return (
    <main className="flex flex-col gap-10">
    <Navbar />
    <Home />
    <div className="max-container flex flex-col gap-10 px-10 max-sm:px-2">
    <Middle />
    <Destination />
    <Portfolio />
    <Reviews />
    <Questions />
    <Subscribe />
    </div>
    <Footer />
    </main>
  );
}

export default App;
