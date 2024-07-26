import { Store } from "./Store.js";
import { StoreDepartment } from "./StoreDepartment.js";
import { StoreProduct } from "./StoreProduct.js";
import { StoreShelf } from "./StoreShelf.js";

const store = new Store({ name: "Store 1" });

const clothesDepartment = new StoreDepartment({ name: "Clothes Department" });

const jacketsShelf = new StoreShelf({ name: "Jackets Shelf" });

const blueJackets = new StoreProduct({ name: "Blue Jacket", price: 100 });
const redJackets = new StoreProduct({ name: "Red Jacket", price: 300 });

jacketsShelf.add(blueJackets);
jacketsShelf.add(redJackets);
clothesDepartment.add(jacketsShelf);

store.add(clothesDepartment);

console.log(store.getPrice());

store.remove(clothesDepartment);

console.log(store.getPrice());
