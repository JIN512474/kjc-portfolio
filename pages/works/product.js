import WorksGridPage from "../../components/WorksGridPage";
import { getWorksByCategory } from "../../data/works";

export default function ProductWorks() {
  return (
    <WorksGridPage
      title="Product"
      activeCategory="product"
      items={getWorksByCategory("product")}
      description="Product, fashion object, and brand image works by KWON JINCHAN."
    />
  );
}
