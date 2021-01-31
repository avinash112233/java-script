function direct(number){
    var a="East",
    b="West",
    c="North",
    d="South",
    e="Wrong Input";
    
    switch(number){
        case 1:
          return a;
          break;
        case 2:
        return b;
        break;
        case 3:
        return c;
        break;
        case 4:
        return d;
        break;
        default:
        return e;
    }

}
var result=direct(3);
console.log(result);
module.exports=direct;
