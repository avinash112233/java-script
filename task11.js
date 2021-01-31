function farenheit(celsius){
    var f = ((9/5)*celsius) + 32;
    return f;
}
var h = farenheit(40);
console.log("result is ",h);
module.exports = farenheit;
