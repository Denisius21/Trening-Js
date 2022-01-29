/*const funcQ = function(name){
const usName = prompt('Enter your name');
const answerUs = prompt('You going?');


const resAnswerUs = 'da';
const resAnswerUs2 = 'no';
console.log(name);

if(answerUs === resAnswerUs){
  alert('Good bye '+ usName)
}
if(answerUs === resAnswerUs2) {
  alert('Welcom '+ usName);
}

}
funcQ();*/


/*const newFunct = function(param1){
  numb = param1;
  if(numb % 2 === 0){
    return 'true';
  }
  if(numb % 2 === 1){
    return 'false';
  }
}
let userNumber = prompt('Enter any number');
const result = newFunct(userNumber);

const secondFunct = function(){
  if(result === 'true'){
    alert( ':))');
  }else{
    alert( '((((');
  }
}
const smail = secondFunct(result);
console.log(smail);

/*const litleNumber = function(number1,number2){
  if(number1 > number2){
    return number2;
  }else{
    return number1;
  }
}
let number1 = prompt('Enter any number');
let number2 = prompt('Enter any number');
const result = litleNumber(number1,number2);*/


/*const silesFunct = function(par1, par2){
  if(par1 > par2){
    return 'Спасибо за покупку';
  }else{
    return 'На Вашем счету не достаточно средств!'
  }
}
number1 = prompt('Введите кол-во своих средств');
number2 = prompt('Введите стоимость товара');
let answer = silesFunct(number1,number2);
alert(answer);*/


const calc = function(numb1, operator, number){
  if( Number.isNaN(numb1 && number) ){
    return('Введите числа');
  }
  switch(operator){
    case'+':{
      console.log(numb1 + number);
      break;
    }
    case'-':{
      console.log(numb1 - number);
      break;
    }
      case'*':{
        console.log(numb1 * number);
        break;
      }
        case '/' :{
          console.log(numb1 / number);
          break;
        }
  
}
}
const firstNumb = +prompt('Введите первое число');
const oper = prompt('Введите оператор + - * /');
const secondNumb = +prompt('Введите второе число');
const resultCalc = calc(firstNumb, oper, secondNumb);
console.log(resultCalc);
