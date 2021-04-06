export const VALIDATION_ERRORS = {
  USERNAME_LETTERS_NUMBERS: 'Username must only contain letters and numbers',
  USERNAME_LENGTH: 'Username must be between 4 and 12 characters long',
  PASSWORD_LOWERCASE: 'Your password must contain at least one lowercase letter',
  PASSWORD_UPPERCASE: 'Your password must contain at least one uppercase letter',
  PASSWORD_DIGIT: 'Your password must contain at least one digit',
  PASSWORD_LENGTH: 'Password must be at least 8 characters long',
};

/**
 * Validates a string's length
 * @param {String} value 
 * @param {Number} minLength 
 * @param {Number} maxLength 
 * @returns {Boolean}
 */
const validateLength = (value, minLength, maxLength) => (
  (!maxLength || value.length <= maxLength) &&
  (!minLength || value.length > minLength)
);

/**
 * Validates a username
 * Needs to only contain letter and numbers
 * Needs to be between 4 and 12 characters long (included)
 * @param {String} username
 * @returns {Array} errors
 */
export const validateUsername = (username) => {
  const errors = [];
  if (!username) {
    return errors;
  }
  if (/[^a-zA-Z0-9]/.test(username)) {
    errors.push(VALIDATION_ERRORS.USERNAME_LETTERS_NUMBERS)
  }
  if (!validateLength(username, 4, 12)) {
    errors.push(VALIDATION_ERRORS.USERNAME_LENGTH)
  }
  return errors;
};

/**
 * Validates a password
 * Needs to contain at least on lowercase letter
 * Needs to contain at least on uppercase letter
 * Needs to contain at least one digit
 * Needs to be at least 8 characters long (included)
 * @param {String} password 
 * @returns {Array} errors
 */
export const validatePassword = (password) => {
  const errors = [];
  if (!password) {
    return errors;
  }
  if (!/[a-z]/.test(password)) {
    errors.push(VALIDATION_ERRORS.PASSWORD_LOWERCASE)
  }
  if (!/[A-Z]/.test(password)) {
    errors.push(VALIDATION_ERRORS.PASSWORD_UPPERCASE)
  }
  if (!/[0-9]/.test(password)) {
    errors.push(VALIDATION_ERRORS.PASSWORD_DIGIT)
  }
  if (!validateLength(password, 8)) {
    errors.push(VALIDATION_ERRORS.PASSWORD_LENGTH)
  }
  return errors;
}
