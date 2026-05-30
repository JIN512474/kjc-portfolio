import WorksGridPage from "../../components/WorksGridPage";
import { works } from "../../data/works";

export default function Works() {
  return (
    <WorksGridPage
      title="Works"
      activeCategory="all"
      items={works}
      description="All selected photography works by KWON JINCHAN."
    />
  );
}
