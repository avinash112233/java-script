function threeintegers(num1,num2,num3){
    var a=true;
    var b=false;
    if(((num1>=50)&&(num1<=99))||((num2>=50)&&(num2<=99))||((num3>=50)&&(num3<=99)) ){
        return a;

    }
else{
    return b;
}
}
var result=threeintegers(51,52,53);
console.log(result);
module.exports = threeintegers;
