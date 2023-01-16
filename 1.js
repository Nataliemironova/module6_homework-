const arr = [0, 14, 3, null, 6, 15, 66 , 1, 5, 10];
const evenArr = [];
const oddArr = [];
const otherArr = [];
function EvenOrOdd(arr) {
    arr.every(function(elem) {   
        if (elem === +elem && elem % 2 === 0 && elem > 0) {
            return evenArr.push(elem);
        }
        else if (elem === +elem && elem % 2 !== 0 && elem !==0){
            return oddArr.push(elem);
        }
        else {
            return otherArr.push(elem);
        }
    })
}
EvenOrOdd(arr);
console.log('Количество четных чисел:'+ evenArr.length);
console.log('Количество нечетных чисел:' + oddArr.length);
console.log('Количество нулевых чисел:' + otherArr.leng);