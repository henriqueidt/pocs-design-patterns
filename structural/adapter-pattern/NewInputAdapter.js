import { NewInput } from "./NewInput.js";

export class NewInputAdapter extends NewInput {
  constructor(props) {
    super(props);
    this.legacyInput = props.legacyInput;
  }

  runValidation() {
    return this.legacyInput.getValidation() + "\n" + this.getValidation();
  }
}
