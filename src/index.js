module.exports = function toReadable (number) {
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
        1: '',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };

    const showHundreeds = () => {
        const hundreds = Number(strNumber[0]);
        const tens = Number(strNumber[1]);
        const units = Number(strNumber[2]);

        const readbleNumber = {
            hundreds: `${unitsDictionary[hundreds]} hundred`,
            tens: `${tensDictionary[tens]}`,
            units: unitsDictionary[units]
        };

        if(strNumber[1] === '1'){
            const newTens = Number(`${strNumber[1]}${strNumber[2]}`);
            readbleNumber.tens = `${tensDictionary[newTens]}`;
            return `${readbleNumber.hundreds} ${readbleNumber.tens}`;
        }else if(strNumber[2] === '0' && strNumber[1] !== '0'){
            return `${readbleNumber.hundreds} ${readbleNumber.tens}`;
        }
        else if(strNumber[1] === '0' && strNumber[2] !== '0'){
            return `${readbleNumber.hundreds} ${readbleNumber.tens}${readbleNumber.units}`;
        } else if(strNumber[2] === '0'){
            return `${readbleNumber.hundreds}`;
        }else{
            return `${readbleNumber.hundreds} ${readbleNumber.tens} ${readbleNumber.units}`;
        }
    };

    const showTens = () => {
        const tens = Number(strNumber[0]);
        const units = Number(strNumber[1]);
        const readbleNumber = {
            tens: tensDictionary[tens],
            units: unitsDictionary[units]
        };

        if(strNumber[0] === '1'){
            const newTens = Number(`${strNumber[0]}${strNumber[1]}`);
            readbleNumber.tens = `${tensDictionary[newTens]}`;
            return `${readbleNumber.tens}`;
        }else if(strNumber[1] === '0'){
            return `${readbleNumber.tens}`;
        }else{
            return `${readbleNumber.tens} ${readbleNumber.units}`;
        }
    };

    const showUnits = () => {
        const units = Number(strNumber[0]);
        const readbleNumber = {
            units: unitsDictionary[units]
        };
        return readbleNumber.units;
    };

    switch(strNumber.length){
        case 1: return showUnits(); break;
        case 2: return showTens(); break;
        case 3: return showHundreeds(); break;
        default: return 'Not valid number'; break;
    }
}
