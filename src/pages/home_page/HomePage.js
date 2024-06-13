import i18next from "../../i18next";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";

const { t }  = i18next;

export default function HomePage(){
    return <div>
        <FeatureSection/>
        <Footer/>
    </div>;
}