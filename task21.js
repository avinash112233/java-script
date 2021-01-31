function largest(num1,num2,num3){
    
    if(num1>num2){
        if(num1>num3){
            return num1;
        }
        else{
            return num3;
        }
    
     }
 else if(num2>num3){
         return num2;
     }
     else{
         return num3;
     }
}

     
        
   


var result=largest(10,20,30);
console.log("largest of thress numbers is",result);
module.exports=largest;
