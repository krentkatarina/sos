import './Home.css';
import Quotes from '../Components/Layout/Quotes/Quotes';
import Newsletter from '../Components/Layout/Newsletter/Newsletter';
import FAQ from '../Components/Faq/Faq';
import Requirements from '../Components/Requirements/Requirements';
import MainBanner from '../Components/Layout/MainBanner/MainBanner';
import SliderBlock from '../Components/SliderBlock/SliderBlock';

const Home = () => {
  return (
    <main>
        <MainBanner />
        <SliderBlock />
        <FAQ />
        <Requirements />
        <Quotes />
        <Newsletter />
    </main>
  )
}

export default Home