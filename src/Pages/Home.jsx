import ApplySection from "../Components/ApplySection";
import BannerHome from "../Components/BannerHome";
import ChooseSection from "../Components/ChooseSection";
import FreqSection from "../Components/FreqSection";
import Logos from "../Components/Logos";
import OfferSection from "../Components/OfferSection";
import Reviews from "../Components/Reviews";
import WorkSection from "../Components/WorkSection";

export default function Home() {
  return (
    <div>
      <BannerHome />
      <OfferSection />
      <ChooseSection />
      <WorkSection />
      <FreqSection />
      <Reviews />
      <Logos />
      <ApplySection />
    </div>
  );
}
