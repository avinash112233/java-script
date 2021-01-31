function present(num1,num2){
    var a=true,
    b=false;
    if(((num1>0) && (num2<0))||((num1<0) && (num2>0))){
        return a;
    }
    else{
        return b;
    }


}
var result=present(1,-2);
console.log(result);
module.exports = present;
