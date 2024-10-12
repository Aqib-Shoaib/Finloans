import BannerHome from "../Components/BannerHome";
import ChooseSection from "../Components/ChooseSection";
import OfferSection from "../Components/OfferSection";

export default function Home() {
  return (
    <div>
      <BannerHome />
      <OfferSection />
      <ChooseSection />
    </div>
  );
}
