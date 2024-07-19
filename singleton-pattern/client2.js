import { BitcoinSingleton } from "./BitcoinSingleton.js";

const bitcoin = new BitcoinSingleton();

bitcoin.transfer("33");
bitcoin.transfer("44");
bitcoin.transfer("55");
