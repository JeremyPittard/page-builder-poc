import { useDroppable } from "@dnd-kit/core";
import { PageDroppableProps } from "../../utils/types";
import HeroContentLeft from "../PageBuilder/Heroes/HeroContentLeft/HeroContentLeft";
import { HeroImageBackground } from "../PageBuilder/Heroes/HeroImageBackground/HeroImageBackground";

const PageDroppable = (props: PageDroppableProps) => {
  const { setNodeRef } = useDroppable({
    id: "page-droppable",
  });

  const renderComponent = (componentID: string) => {
    switch (componentID) {
      case "hero-content-left":
        return <HeroContentLeft />;
      case "hero-background-image":
        return <HeroImageBackground />;
      default:
        break;
    }
  };

  return (
    <ul ref={setNodeRef}>
      {props.items.map((item) => (
        <li key={item.id}>{renderComponent(item.id)}</li>
      ))}
    </ul>
  );
};

export default PageDroppable;
