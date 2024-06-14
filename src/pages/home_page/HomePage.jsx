import FeatureSection from './components/FeatureSection';
import HeroSection from './components/hero_section/HeroSection';

// const { t } = i18next;

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
    </div>
  );
}
