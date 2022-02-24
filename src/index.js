module.exports = function toReadable (input) {
  var zero_to_nine = [ 
    'zero', 'one' , 'two' , 'three', 'four', 'five' , 'six' , 'seven' , 
    'eight','nine'
    ];
    var ten_to_nineteen = ['ten', 'eleven' , 'twelve' ,'thirteen' , 'fourteen',
    'fifteen' , 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
    var tens = ['none', 'none', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'] ;
    
    
    var builder = "";
    
    
    
    //from 100
    if(input>= 100 && input <= 999){
    var get_tens =parseInt(input/100, 10); 
    var seconds = parseInt(input%100, 10);
    //var thirds
    builder += zero_to_nine[get_tens];
    builder += " hundred";
    
    
    if(seconds >= 20){ 
    var get_tens =parseInt(seconds/10, 10);
    var get_tens_2 = (seconds%10);
    builder += " ";
    builder += tens[get_tens];
    if(get_tens_2 != 0){
    builder += " ";
    builder += zero_to_nine[get_tens_2];
    }
    }
    else if(seconds >= 10 && seconds <= 19){
    var get_tens = (seconds%10);
    builder += " ";
    builder += ten_to_nineteen[get_tens];
    }
    else{
    builder += " ";
    builder += seconds == 0 ? '': zero_to_nine[seconds];
    }
    }
    
    
    
    else if(input >= 20){ 
    var get_tens =parseInt(input/10, 10);
    var get_tens_2 = (input%10);
    builder += tens[get_tens];
    if(get_tens_2 != 0){
    builder += " ";
    builder += zero_to_nine[get_tens_2];
    }
    
    }
    else if(input >= 10 && input <= 19){
    var get_tens = (input%10);
    builder = ten_to_nineteen[get_tens];
    }
    else{
    builder = zero_to_nine[input];
    }
    
    return builder.trim();
    
    }
  


