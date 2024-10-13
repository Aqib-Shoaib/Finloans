import ApplySection from "../Components/ApplySection";
import BannerCommon from "../Components/BannerCommon";
import ChooseSection from "../Components/ChooseSection";
import FreqSection from "../Components/FreqSection";
import Reviews from "../Components/Reviews";
import WorkSection from "../Components/WorkSection";

export default function About() {
  return (
    <div>
      <BannerCommon heading="About Us" />
      <ChooseSection />
      <WorkSection />
      <FreqSection />
      <Reviews />
      <ApplySection />
    </div>
  );
}
