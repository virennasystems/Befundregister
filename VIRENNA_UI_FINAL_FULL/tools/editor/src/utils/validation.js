
export function validateData(formData, errors) {
  if (formData.titel && formData.titel.length < 3) {
    errors.titel.addError("Titel ist zu kurz.");
  }
  return errors;
}
