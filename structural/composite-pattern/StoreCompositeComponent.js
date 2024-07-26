import { StoreComponent } from "./StoreComponent.js";

export class StoreCompositeComponent extends StoreComponent {
  constructor(props) {
    super(props);
    this.children = [];
  }

  add(child) {
    console.log(this.name);
    this.children.push(child);
  }

  remove(child) {
    console.log("removing my children", child.name);
    // only call recursive remove if child is not a leaf
    if (child.getChildren) {
      child.getChildren().forEach((c) => {
        child.remove(c);
      });
    }

    this.children = this.children.filter((c) => c !== child);
  }

  getChildren() {
    return this.children;
  }

  getPrice() {
    return this.children.reduce((acc, child) => acc + child.getPrice(), 0);
  }
}
