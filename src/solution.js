const number = 214;

const strNumber = number.toString();


const unitsDictionary = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
};
const tensDictionary = {
    0: '',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'eightteen',
    18: 'seventeen',
    19: 'nineteen',
    2: 'twenty',
    3: 'thirty',
    4: 'fourty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
};
switch(strNumber.length){
    case 1:
    case 2:
    case 3:
}




const showHundreeds = () => {

};






const hundreds = Number(strNumber[0]);
const tens = Number(strNumber[1]);
const units = Number(strNumber[2]);

const reableNumber = {
    hundreds: `${unitsDictionary[hundreds]} hundreed`,
    tens: `${tensDictionary[tens]}`,
    units: unitsDictionary[units]
};

if(strNumber.length === 2){
    if(strNumber[0] === '1'){
        const newTens = Number(`${strNumber[0]}${strNumber[1]}`);
        reableNumber.tens = `${tensDictionary[newTens]}`;
        console.log(`${reableNumber.tens}`);
    }else{
        console.log(`${reableNumber.tens}${reableNumber.units}`);
    }
}

if(strNumber.length === 3){
    if(strNumber[1] === '1'){
        const newTens = Number(`${strNumber[1]}${strNumber[2]}`);
        reableNumber.tens = `${tensDictionary[newTens]}`;
        console.log(`${reableNumber.hundreds} ${reableNumber.tens}`);
    }else if(strNumber[2] === '0'){
        console.log(`${reableNumber.hundreds} ${reableNumber.tens}`);
    }
    else {
        console.log(`${reableNumber.hundreds} ${reableNumber.tens} ${reableNumber.units}`);
    }

}
