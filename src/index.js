module.exports = function toReadable (number) {
    
    if (number < 100) return getTwo(number)
    if (number >= 100) {
        let str, num, num1, num2
        str = number.toString().split('')
        num = parseInt(str[0])
        num1 = parseInt(str[1]+str[2]) 
        
        if (num1 === 0) {
            return firstTwenty[num] + ' hundred'
        } else {
            return firstTwenty[num] + ' hundred ' + getTwo(num1)
        }
    }
}
const firstTwenty = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
const roundNumbers = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

    const getTwo = (number1) => {
    if (number1 <= 20) {
        return firstTwenty[number1]
    }
    else if (number1 >= 21 && number1 < 100) {
        let str, num, num1 
        str = number1.toString().split('')
        num = parseInt(str[0])
        num1 = parseInt(str[1])
        if (num1 === 0) {
            return roundNumbers[num - 1]
        } else 
        {return roundNumbers[num - 1] + ' ' + firstTwenty[num1]}
    }
}
     
