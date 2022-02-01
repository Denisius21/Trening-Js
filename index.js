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


/*const calc = function(numb1, operator, number){
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
console.log(resultCalc);*/

/*function absoluteNumber(parametr){
  if (Number.isNaN(parametr)){
    return('Введите число');
  }
  if(typeof{parametr} === 'undefined'){
    return('Введите число');
  }
  if (parametr === 'false'){
    return('Введите число');
  }
  if(parametr < (0)){
    return( parametr * (-1));
  }if(0 <= parametr){
    return(parametr);
  }if(typeof{parametr} === object){
    return('Введите число');
  }
}
const number = +prompt('Введите любое число');
const resultAbsoluteNumber = absoluteNumber(number);
console.log(resultAbsoluteNumber);*/

/*for (let num = +prompt('Введите результат (2+2*2)=?');num !== 6; num = +prompt('Введите результат (2+2*2)=?')){
  alert('Ответ не верный!');
}*/
/*let number = +prompt("Введите результат, 2+2*2=?");
while (number){
  if( number < 6 && number > 6 ){
  }else if(number === 6) {
    alert('Результат верный!')
    break;
  }
  }*/



  for (let num = +prompt('Введите результат (2+2*2)=?'); ; num = +prompt('Введите результат (2+2*2)=?')){
    if(num !== 6){
    alert('Ответ не верный!');}
    else if(num === 6){
      alert('Поздравляю, ответ верный!');
      break;
    }
  }








