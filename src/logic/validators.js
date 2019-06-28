const startMatcher = /\d{1,3} \d{1,3} [NESW]/;
const instructionsMatcher = /[LRM]{1,1000}/;
const sizeMatcher = /\d{1,3} \d{1,3}/;

export const isValid = (startString, instructionsString, sizeString) => {
  return (
    isValidStart(startString) &&
    isValidInstructions(instructionsString) &&
    isValidSize(sizeString)
  );
};

const isValidStart = startString => startString.match(startMatcher);

const isValidInstructions = instructionsString =>
  instructionsString.match(instructionsMatcher);

const isValidSize = sizeString => sizeString.match(sizeMatcher);
