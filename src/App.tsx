import "@mantine/core/styles.css";
import "./App.css";
import { MantineProvider } from "@mantine/core";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Component } from "./utils/types";
import { useState } from "react";
import PageDroppable from "./components/DND/Droppable";
import PageDraggable from "./components/DND/Draggable";

const components: Component[] = [
  {
    title: "HeroContentLeft",
    label: "Hero with Left Content",
    id: "hero-content-left",
  },
  {
    title: "HeroBackgroundImage",
    label: "Hero with Background Image",
    id: "hero-background-image",
  },
];

function App() {
  const [pageItems, updatePageItems] = useState<Component[]>([]);

  const addItemsToPage = (event: DragEndEvent) => {
    console.log(event);
    const newItem = components.find(
      (item) => item.title == event.active.data.current?.title
    );
    const temp = [...pageItems];
    temp.push(newItem as Component);
    updatePageItems(temp);
  };

  return (
    <MantineProvider>
      <DndContext onDragEnd={(event) => addItemsToPage(event)}>
        <main>
          <ul>
            {components.map((component) => (
              <PageDraggable
                key={component.id}
                id={component.id}
                title={component.title}
                label={component.label}
              />
            ))}
          </ul>
          <div className="page">
            <PageDroppable items={[...pageItems]} />
          </div>
        </main>
        <footer>
          <a
            href="https://github.com/JeremyPittard/page-builder-poc"
            rel="noopener noreferrer"
            target="_blank"
          >
            the githubs
          </a>
        </footer>
      </DndContext>
    </MantineProvider>
  );
}

export default App;
