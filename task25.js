function calci(num1,num2,choice){
    switch(choice){
        case 1:
        var sum=num1+num2;
        return sum;
        break;
        case 2:
        var minus=num1-num2;
        return minus;
        break;
        case 3:
        var multiply=num1*num2;
        return multiply;
        break;
        case 4:
        var division=num1/num2;
        return division;
        break;
        default:
        none;


    }

}
var result=calci(1,2,3);
console.log(calci);
module.exports=calci;
