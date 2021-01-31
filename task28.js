function comparing(base,perpendicular){
    var areaofsquare=base*base;
    var areaofrectangle=0.5*base*perpendicular;
    if(areaofsquare > areaofrectangle){
        return areaofsquare;
    }
    else{
        return areaofrectangle;
    }


}
var result=comparing(10,25);
console.log(result);
module.exports=comparing;
