export class NewInput {
  constructor({ isRequired }) {
    this.isRequired = isRequired;
  }

  getValidation() {
    if (this.isRequired) {
      return "This field is required";
    }
  }
}
