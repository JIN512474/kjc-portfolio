import WorksGridPage from "../../components/WorksGridPage";
import { getWorksByCategory } from "../../data/works";

export default function PeopleWorks() {
  return (
    <WorksGridPage
      title="People"
      activeCategory="people"
      items={getWorksByCategory("people")}
      description="Portrait and people-focused photography works by KWON JINCHAN."
    />
  );
}
