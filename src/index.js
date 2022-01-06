module.exports = function toReadable (number) {
  // function toReadable (number) {
  let strNumber = '';
  let strTemp = '';
  let CheckNumber = 0;
  // let strThousans = 'тысяч';

  number < 0 ? (CheckNumber = number * -1) : (CheckNumber = number);

  let thousands = (CheckNumber - CheckNumber % 1000) / 1000;
  let hundreds = (CheckNumber - CheckNumber % 100 - thousands * 1000) / 100;
  let units = CheckNumber % 10;
  let dozens = CheckNumber % 100 - units;
  let dozen = CheckNumber % 100;

  if (CheckNumber == 1000) {
    strNumber = `one thousand`;
  } else if (CheckNumber > 99 && CheckNumber < 1000) {
    strNumber = isHundred (hundreds);
  } else if (CheckNumber < 100) {
    strNumber = isDozens (dozen);
  }

  function isHundred (hundreds) {
    dozen > 0
      ? (strTemp = `${isUnits (hundreds)} hundred ${isDozens (dozen)}`)
      : // ? (strTemp = `${isUnits (hundreds)} hundred and ${isDozens (dozen)}`)
        (strTemp = `${isUnits (hundreds)} hundred`);
    return strTemp;
  }

  function isDozens (CheckNumber) {
    if (CheckNumber < 20) {
      strTemp = isUnits (CheckNumber);
    } else if (CheckNumber >= 20 && CheckNumber < 100) {
      dozen % 10 != 0
        ? (strTemp = `${isDozen (dozens)} ${isUnits (units)}`)
        : (strTemp = isDozen (dozen));
    }
    return strTemp;
  }

  function isUnits (CheckNumber) {
    let strUnits = '';

    switch (CheckNumber) {
      case 0:
        strUnits = 'zero';
        break;
      case 1:
        strUnits = 'one';
        break;
      case 2:
        strUnits = 'two';
        break;
      case 3:
        strUnits = 'three';
        break;
      case 4:
        strUnits = 'four';
        break;
      case 5:
        strUnits = 'five';
        break;
      case 6:
        strUnits = 'six';
        break;
      case 7:
        strUnits = 'seven';
        break;
      case 8:
        strUnits = 'eight';
        break;
      case 9:
        strUnits = 'nine';
        break;
      case 10:
        strUnits = 'ten';
        break;
      case 11:
        strUnits = 'eleven';
        break;
      case 12:
        strUnits = 'twelve';
        break;
      case 13:
        strUnits = 'thirteen';
        break;
      case 14:
        strUnits = 'fourteen';
        break;
      case 15:
        strUnits = 'fifteen';
        break;
      case 16:
        strUnits = 'sixteen';
        break;
      case 17:
        strUnits = 'seventeen';
        break;
      case 18:
        strUnits = 'eighteen';
        break;
      case 19:
        strUnits = 'nineteen';
        break;
    }
    return strUnits;
  }

  function isDozen (CheckNumber) {
    let strDozens = '';

    if (CheckNumber > 99 && CheckNumber < 19) {
      return (strDozens = '');
    } else {
      // десятки от 20 до 90
      switch (CheckNumber) {
        case 20:
          strDozens = 'twenty';
          break;
        case 30:
          strDozens = 'thirty';
          break;
        case 40:
          strDozens = 'forty';
          break;
        case 50:
          strDozens = 'fifty';
          break;
        case 60:
          strDozens = 'sixty';
          break;
        case 70:
          strDozens = 'seventy';
          break;
        case 80:
          strDozens = 'eighty';
          break;
        case 90:
          strDozens = 'ninety';
          break;
      }
      return strDozens;
    }
  }

  number < 0 ? (strNumber = `-${strNumber}`) : strNumber;
  return strNumber;
};

// console.log (toReadable (1));
// console.log (toReadable (300));
// console.log (toReadable (600));
// console.log (toReadable (579));
// console.log (toReadable (15));
// console.log (toReadable (4));
// console.log (toReadable (0));
// console.log (toReadable (19));
// console.log (toReadable (20));
// console.log (toReadable (25));
// console.log (toReadable (30));
// console.log (toReadable (1000));
// console.log (toReadable (70));
// console.log (toReadable (-111));

// -------------------------------------------------------------------------------------------------

// thousand
// hundreds
// dozens
// units
