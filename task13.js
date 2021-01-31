function leapyear(year){
    var given = year;
    // var a=1;
    // var b=0;
    if(((given % 4) == 0) && ((given % 100) != 0)){
        return 1;
        // console.log("leap year",a)

    }

    else if (((given % 400) == 0) && ((given % 100) == 0)){
        return 1;
        // console.log("leapyear",a);
    }
    else{
        return 0;
    }
}
var result=leapyear(2000);
console.log(result);
module.exports = leapyear;
