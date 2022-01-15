module.exports = function toReadable (x) {
    let xStr = x.toString();
    let result = '';
    let lastTwo = Number(xStr.substr(xStr.length - 2, 2));
  
    lastTwo < 20 ? lastTwo = firstTwenty(lastTwo) : lastTwo = others(lastTwo);
    
    function firstTwenty(y) {
    y.toString()[0] === 0 ? y = y.toString().subStr(1) : y = y;
    switch (y) {
      case 0: return '';
        break;
      case 1: return 'one';
        break;
      case 2: return 'two';
        break;
      case 3: return 'three';
        break;
      case 4: return 'four';
        break;
      case 5: return 'five';
        break;
      case 6: return 'six';
        break;
      case 7: return 'seven'; 
        break;
      case 8: return 'eight';
        break;
      case 9: return 'nine';
        break;
      case 10: return 'ten';    
        break; 
      case 11: return 'eleven';  
        break;
      case 12: return 'twelve';
        break;
      case 13: return 'thirteen';
        break;
      case 14: return 'fourteen';
        break;
      case 15: return 'fifteen';
         break;  
      case 16: return 'sixteen';
        break; 
      case 17: return 'seventeen';
        break;
      case 18: return 'eighteen';
        break;
      case 19: return 'nineteen';  
        break;
    }
  }
  
  function others(y) {
      let q = '';
      const g = firstTwenty(Number(y.toString()[1]));
      if (g) {
        q = ' ' + g;
      }
      let x = '';

      
    switch (Number(y.toString()[0])) {
      case 2: x = 'twenty';
        break;
      case 3: x = 'thirty';
        break;
      case 4: x = 'forty';
        break;
      case 5: x = 'fifty';
        break;
      case 6: x = 'sixty';
        break;
      case 7: x = 'seventy'; 
        break;
      case 8: x = 'eighty';
        break;
      case 9: x = 'ninety';
        break;
    }
      return x + q;
  }
    
    if (xStr.length === 3) {
      lastTwo === '' ? result = firstTwenty(Number(xStr[0])) + ' hundred' : result = firstTwenty(Number(xStr[0])) + ' hundred ' + lastTwo;
    } else if (x === 0) {
      result = 'zero';
    } else if (xStr.length <= 2) {
      result = lastTwo;
    } else {
      result = 'не в диапазоне';
    }
    
    return result;
}
