import { LegacyInput } from "./LegacyInput.js";
import { NewInputAdapter } from "./NewInputAdapter.js";

const field = {
  maxLength: 5,
  isRequired: true,
};
const legacyInput = new LegacyInput(field);
const adapter = new NewInputAdapter({ legacyInput, ...field });

console.log(adapter.runValidation());
