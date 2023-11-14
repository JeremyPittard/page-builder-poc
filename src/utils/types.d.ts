export interface Component {
  title: string;
  label: string;
  id: string;
}

export interface IPageDroppable {
  items: string[];
}

export interface PageDroppableProps {
  items: Component[];
  deleteFunction: (componentID: string) => void;
}

export interface IPageDraggable {
  children: Component;
}
