import ReportHeader from "../components/ReportHeader";
import ContributionRow from "../components/ContributionRow";
import ToggleBarsRow from "../components/ToggleBarsRow";
import DashboardLower from "../components/DashboardLower";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      <ReportHeader />
      <ContributionRow />
      <ToggleBarsRow />
      <DashboardLower />
    </div>
  );
}
