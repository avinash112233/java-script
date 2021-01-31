function converter(inr){
    var dollers = (inr / 75);
    return dollers;
}
var usd = converter(100);
console.log(usd);
module.exports = converter;
