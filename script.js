//string
function anagrams(strA, strB) {
  if (cleanString(strA) === cleanString(strB)) {
    return true;
  }
  else {
    return false;
  }
  function cleanString(str) {
    let a = str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
    return a;
  }
}

console.log(anagrams('aaoaa', 'oaaaa'));

//----------------------------------

function qwer(stri) {
  let a = stri.split('').reverse().join('')
  return a;
}

console.log(qwer('qweertuty'));

//----------------------------------

function qwerty(stri) {
  let a = stri.split('').reverse().join('')
  if (stri === a) {
    return true;
  }
  else {
    return false;
  }
}

console.log(qwerty('1114'));


//number
function oppo(num) {

  return -num;

}
console.log(oppo(-4));

//----------------------------------

function evenOdd(num) {

  if (num % 2 == 0) {
    return 'even';
  }
  else {
    return 'odd';
  }
}
console.log(evenOdd(13))

//-------------------------------------

function year(year) {
  if (year > 0) {
    return (Math.floor(year / 100) + 1);
  }
  else {
    return ('Year is oppositive!!')
  }
}

console.log(year(-12454345634));

//------------------------------------

function divisor(num1, num2, div) {

  if (num1 % div == 0 && num2 % div == 0) {
    return ('Its a divisor of two numbers!!');
  }
  else {
    return ('Is not a divisor!!');
  }
}
console.log(divisor(4, 6, 2))


function nod(a, b) {
  if (b > 0) {
    return nod(b, a % b);
  }
  else {
    return Math.abs(a);
  }
}
console.log(nod(16, 12))

//Array

let mass = [1, 2, 3, 4, 65, 7, 4, 2, 2];
let filtered = mass.filter(function (el, index) {
  return index % 2 == 0;
});

console.log(filtered);

//----------------------------------------

function arrDubl() {
  let array = Array.from(new Set([1, 2, 3, 4, 3, 2, 1, 5, 5, 6, 7]));
  return console.log(array);
}
arrDubl();

function arrrDubl() {
  let array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
  let arraySet = new Set(array);
  let backArray = [...arraySet];
  console.log(backArray);
}
arrrrDubl();

function arrrrDubl() {
  let array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
  let arrayDub = array.filter(function (el, index) {
    return array.indexOf(el) === index;
  });

  console.log(arrayDub);
}
arrrrDubl();

//------------------------------------------------


let array = [-2, -4, 10, -8];
let result = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    result += array[i];
  }
}
console.log(result);

//---------------------------------------------------


let country_capitals = [{country: 'Ukraine', capital: 'Kyiv'}, {country: 'Germany', capital: 'Berlin'}, {country: 'USA', capital: 'Washington'} ];
for(let i = 0; i<country_capitals.length; i++){
  console.log(`The capital of ${country_capitals[i].country} is ${country_capitals[i].capital}!!`);
}


//--------------------------------------------------

let arrC = [1, 2, 3, 4, 5, 6, 7, 15, 30];
let arrayC = arrC.map(function (item) {
  if (item % 3 == 0 && item % 5 == 0) {
    return ('fizzbuzz');
  }

  else if (item % 3 == 0) {
    return ('fizz');

  }
  else if (item % 5 == 0) {
    return ('buzz');
  }

  else {
    return (item);
  }
});
console.log(arrayC);



