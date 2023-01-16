function first(x){
    function second(y) {
        return x + y;
    }
    return second(y);
}
const x = 14;
const y = 25;
console.log(first(x));
