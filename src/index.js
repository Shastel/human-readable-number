// eslint-disable-next-line consistent-return
module.exports = function toReadable(number) {
  const numberNames = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tenNames = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number === 0) return numberNames[0];

  const words = [];
  const hundreds = Math.floor(number / 100);
  const other = number % 100;

  if (hundreds > 0) {
    words.push(`${numberNames[hundreds]} hundred`);
  }

  if (other > 0) {
    if (other < 20) {
      words.push(numberNames[other]);
    } else {
      const tens = Math.floor(other / 10);
      const units = other % 10;
      words.push(tenNames[tens]);
      if (units > 0) {
        words.push(numberNames[units]);
      }
    }
  }

  return words.join(' ');
};
