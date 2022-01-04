// module.exports = function toReadable (number) {
function toReadable (number) {
  let res = '';

  // от 0 до 20
  switch (number) {
    case 0:
      res = 'zero';
      break;
    case 1:
      res = 'one';
      break;
    case 2:
      res = 'two';
      break;
    case 3:
      res = 'three';
      break;
    case 4:
      res = 'four';
      break;
    case 5:
      res = 'five';
      break;
    case 6:
      res = 'six';
      break;
    case 7:
      res = 'seven';
      break;
    case 8:
      res = 'eight';
      break;
    case 9:
      res = 'nine';
      break;
    case 10:
      res = 'ten';
      break;
    case 11:
      res = 'eleven';
      break;
    case 12:
      res = 'twelve';
      break;
    case 13:
      res = 'thirteen';
      break;
    case 14:
      res = 'fourteen';
      break;
    case 15:
      res = 'fifteen';
      break;
    case 16:
      res = 'sixteen';
      break;
    case 17:
      res = 'seventeen';
      break;
    case 18:
      res = 'eighteen';
      break;
    case 19:
      res = 'nineteen';
      break;
  }

  return `${number}: ${res}`;
}

console.log (toReadable (1));
console.log (toReadable (3));
console.log (toReadable (15));
console.log (toReadable (4));
console.log (toReadable (0));
console.log (toReadable (19));
console.log (toReadable (11));
