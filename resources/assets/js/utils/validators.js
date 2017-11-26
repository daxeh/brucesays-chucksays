/**
 * validator.js contains common functions for validations.
 */
export const mobileRegex = /^(\+614|04)\d{8}$/g;

/**
 * Executes regex to find matches to number format
 * @param regex regular expression to match
 * @param value the string to test
 * @return bool true when there is a match, false otherwise
 * {@link https://regex101.com/codegen}
 */
export const isValidFormat = (regex:string, value:string) => {
  let m;
  let result = false;

  // Modifed generated code from regex tests, see link
  while ((m = regex.exec(value)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    m.forEach((match, groupIndex) => {
      result = true;
    });
  }
  return result;
}
