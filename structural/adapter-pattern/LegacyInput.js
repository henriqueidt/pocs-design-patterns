export class LegacyInput {
  constructor({ maxLength }) {
    this.validationMessage = `Please enter at least ${maxLength} characters`;
  }

  getValidation() {
    return this.validationMessage;
  }
}
