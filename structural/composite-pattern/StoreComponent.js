export class StoreComponent {
  constructor({ name, price }) {
    this.name = name;
    this.price = price;
  }

  add(component) {
    throw new Error("This method must be overwritten!");
  }

  remove(component) {
    throw new Error("This method must be overwritten!");
  }
}
