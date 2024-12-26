import { Hero } from './components/landing/Hero';
import { Features } from './components/landing/Features';

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <Features />
    </div>
  );
}