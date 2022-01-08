module.exports = function toReadable (number) {
    let arrN = Array.from(number.toString())
    let one = arrN[0]
    let two = arrN[1]
    let thre = arrN[2]
    
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']; 
      
    if (arrN.length == 1 && number == 0) {
        return ('zero')
    }

    if (arrN.length == 1 && number < 10) {
        return (ones[one])
    }
    
    if (arrN.length == 2 && number < 100) {
      if (number > 19) {
        if (two !== 0) {
        return tens[one] + " " + ones[two]
      } if (two == 0) {
        return tens[one]
      }
    } if (number < 20) {
        return teens[two]
      } 
       
    }

    if (arrN.length = 3 && number < 1000) {
       
       if (two == 0 && thre == 0) {
        return ones[one] + ' hundred'
       } if (two == 0 && thre !== 0) {
        return ones[one] + ' hundred ' + ones[thre]
       } if (two > 1 && thre == 0) {
        return ones[one] + ' hundred ' + tens[two]
       }  if (two == 1 && thre == 0) {
        return ones[one] + ' hundred ' + teens[0]
       }  if (two == 1 && thre !== 0) {
        return ones[one] + ' hundred ' + teens[thre]
       } if (two > 1 && thre !== 0) {
        return ones[one] + ' hundred ' + tens[two] + ' ' + ones[thre]
       }}
}
