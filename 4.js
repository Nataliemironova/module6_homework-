function counterNum(x, y){
    let counter = x;
    const i = setInterval(function(){
    console.log(counter);
    counter++;
    if(counter === y + 1) {
        clearInterval(i);
    }
}, 1000);
}
counterNum(1, 15);