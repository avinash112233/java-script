function sumofintegers(num1,num2){
    var sum = num1+num2;
    if(num1==num2){
        
        var total=sum*3;
        return total;
    }
    else{
        return sum;
    }

}
var result=sumofintegers(10,20);
console.log("output is ",result);
module.exports = sumofintegers;
