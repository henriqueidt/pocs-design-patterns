import { BitcoinSingleton } from "./BitcoinSingleton.js";
import "./client1.js";
import "./client2.js";

// Even though we are instantiating bitcoin three times, the singleton will guarantee
// that the same instance is returned every time.
// Therefore we keep a consistent history of transactions.
const bitcoin = new BitcoinSingleton();

console.log(bitcoin.getHistory());
