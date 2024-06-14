import i18next from "../../i18next";
import FeatureSection from "./components/FeatureSection";
import HiroSection from "./components/hiro_section/HiroSection";

const { t } = i18next;

export default function HomePage() {
  return (
    <div>
      <HiroSection />
      <FeatureSection />
    </div>
  );
}
