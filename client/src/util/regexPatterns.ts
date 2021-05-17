export const emailPattern =
  // eslint-disable-next-line no-useless-escape
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

export const passwordRequirements =
  // prettier-ignore
  // eslint-disable-next-line
  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.{1,}[!@#$%^&*]).{8,64}/g;
