function finding(number1,number2){
    if(number1==8 || number2==8 || (number1+number2)==8){
        return true;

    }
    else{
        return false;
    }

}
var result=finding(10,20);
console.log(result);
module.exports=finding;
