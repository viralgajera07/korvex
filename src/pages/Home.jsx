import { Hero } from '../components/Hero';
import { WhyUs } from '../components/WhyUs';
import { Process } from '../components/Process';
import { Testimonials } from '../components/Testimonials';
import { Faq } from '../components/Faq';

export function Home({ stats }) {
  return (
    <div className="home-page">
      <Hero stats={stats} />
      <WhyUs />
      <Process />
      <Testimonials />
      <Faq />
    </div>
  );
}
