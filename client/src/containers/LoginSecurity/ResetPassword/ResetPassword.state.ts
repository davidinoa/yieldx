import { passwordRequirements } from "../../../util/regexPatterns";

export const formDefaults = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: ""
};

export function validateForm(inputs: Record<string, string>) {
  const { currentPassword, newPassword, confirmPassword } = inputs;
  const errors: { [field: string]: string } = {};

  const requirements =
    "Password must have 8 characters in length, 1 number (0-9), 1 lower case (a-z), 1 upper case (A-Z), and 1 special character (!@#$%^&*)";
  if (!currentPassword) {
    errors.currentPassword = "Required";
  }

  if (!newPassword) {
    errors.newPassword = "Required";
  }

  if (!confirmPassword) {
    errors.confirmPassword = "Required";
  }
  if (confirmPassword && confirmPassword !== newPassword) {
    errors.newPassword = "Passwords must match";
    errors.confirmPassword = "Passwords must match";
  }

  if (!newPassword.match(passwordRequirements)) {
    errors.newPassword = requirements;
  }

  if (!confirmPassword.match(passwordRequirements)) {
    errors.confirmPassword = requirements;
  }

  if (currentPassword === newPassword) {
    errors.newPassword = "Enter a different password";
    errors.confirmPassword = "Enter a different password";
  }

  return errors;
}
