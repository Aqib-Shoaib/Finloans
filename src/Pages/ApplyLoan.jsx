import ApplyForm from "../Components/ApplyForm";
import BannerCommon from "../Components/BannerCommon";
import WorkSection from "../Components/WorkSection";

export default function ApplyLoan() {
  return (
    <div>
      <BannerCommon heading="Apply Loan" />
      <ApplyForm />
      <WorkSection />
    </div>
  );
}
