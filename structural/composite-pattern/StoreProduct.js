import { StoreComponent } from "./StoreComponent.js";

export class StoreProduct extends StoreComponent {
  constructor(props) {
    super(props);
  }

  getPrice() {
    return this.price;
  }
}
