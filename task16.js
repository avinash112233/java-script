function checking(num1,num2){
    var a=true;
    var b=false;
    
    if((num1 == 50) || (num2== 50) || ((num1+num2)==50)){
        return a;
    }
    else{
        return b;
    }
}
      
var result=checking(10,50);
console.log(result);
module.exports = checking ;
