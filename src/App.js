import './App.css';
import Header from './components/Header';
import Brands from './components/Brands';
import Trusted from './components/Trusted';
import Promotion from './components/Promotion';
import Predict from './components/Predict';
import Chart from './components/Chart';
import WhyIsIt from './components/WhyIsIt';
import Steps from './components/Steps';
import UserReviewsCarousel from './components/UserReview';
import FAQSection from './components/FAQSection';
import Questions from './components/Questions';
import Footer from './components/Footer';
function App() {
  return (
  <>
  <Header/>
  <Trusted/>
  <Brands/>
  <Promotion/>
  <Predict/>
  <Chart/>
  <WhyIsIt/>
  <Steps/>
  <UserReviewsCarousel/>
  <FAQSection/>
  <Footer/>
  </>
  );
}

export default App;
