function same(num1,num2,num3){
   
    if(num1==num2 && num2==num3 && num1==num3){
        return 30;

    }
    else if(num1==num2||num2==num3||num1==num3){
        return 20;
    }
else{
    return 40;
}
}
var result=same(1,2,3);
console.log(result);
module.exports=same;
