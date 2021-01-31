function range(num){
    var a= true;
    var b= false;
    if (((num>=80)&&(num<=120))||((num>=380)&&(num<=420))){
        return a;
        // if((num>=380)&&(num<=420)){
        //     return a;
        // }
        // else{
        //     return b;
        // }
    }
    else{
        return b;

        
    }

}
var result=range(320);
console.log(result);
module.exports = range;
