import { Hero } from '../components/Hero';
import { LiveMetricsTicker } from '../components/LiveMetricsTicker';
import { Services } from '../components/Services';
import { WhyUs } from '../components/WhyUs';
import { Portfolio } from '../components/Portfolio';
import { Process } from '../components/Process';
import { Faq } from '../components/Faq';

export function Home({ stats }) {
  return (
    <div className="home-page">
      <Hero stats={stats} />
      <LiveMetricsTicker />
      <Services />
      <WhyUs />
      <Portfolio />
      <Process />
      <Faq />
    </div>
  );
}
