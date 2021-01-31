function sum(num1,num2){
    
    if((num1+num2)>=50 && (num1+num2)<=80){
        return 65; 
    }
    else{
        return 80;
    }
}
var result=sum(25,26);
console.log(result);
module.exports=sum;
