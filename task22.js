function last(num1,num2,num3){
    var a=true;
    var b=false;
    
    if((num1>0)&&(num2>0)&&(num3>0)){
        if(num1%10 == num2%10 && num2%10 == num3%10 && num1%10 == num3%10)
        {
            return a;
        }
        else{
            return b;
        }
    }
    else {
        return b;
    }

}
var result=last(23,24,25);
console.log(result);
module.exports=last;
