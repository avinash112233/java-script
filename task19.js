function multiples(number){
    var a=true,b=false;
    if(((number % 3)==0)||((number % 7)==0)){
        return a;

    }
    else{
        return b;
    }

}
var result=multiples(21);
console.log("printt",result);
module.exports = multiples;
