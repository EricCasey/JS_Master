var last = 1;
var current = 1;

function fibo() {
console.log(current);

    for (var i = 0; i < 15; i++) {
        last = current - last;
        current = current + last;
        console.log(current)

}
} // end of function



fibo();
