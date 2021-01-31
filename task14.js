function greater(number){
    var num=number;
    if(num < 13){
        var difference = 13 - num;
        return difference;

    }
    else{
        var dif = (num - 13)*2;
        return dif;

    }

}
var result = greater(15);
console.log("print",result);
module.exports = greater ;
