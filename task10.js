function areaoftriangle(base,height){
    
    var area=(1/2 * base * height);
    return area;
}
var a = areaoftriangle(10,20);
console.log("area of triangle is ",a)
module.exports = areaoftriangle;
