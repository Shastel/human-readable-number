module.exports = function toReadable(number) {

    let lessTen = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let moreTen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let tens = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "hundred"];

    number = String(number);
    let res = '';

    switch (number.length) {
        case 3:
            res = lessTen[number[0]] + " hundred ";
            number = number.slice(1);
        case 2:
            if (number[0] == 1) {
                res += moreTen[number[1]] + " ";
                number = [];
            } else if (number[0] == 0) {
                number = number.slice(1);
            } else {
                res += tens[number[0] - 1] + " ";
                number = number.slice(1);
            }
        case 1:
            if (number != 0) {
                res += lessTen[number[0]] + " ";
            } else if (!res) {
                res = lessTen[number[0]] + " ";
            }
            break;
        default:
            res = "Error";
    }

    return res.slice(0, res.length - 1);
}