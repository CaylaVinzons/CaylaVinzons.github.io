function line(x1,y1,x2,y2) {
    var m = (y2-y1)/(x2-x1);
    var b = y1-m(x1);
    return "y = "+m+" x + "+b;
}
var line = 12;
console.log(line);


// object.line = 12;
// object.line = function line(x1,y1,x2,y2) {
//     var m = (y2-y1)/(x2-x1);
//     var b = y1-m(x1);
//     return "y = "+m+" x + "+b;
// }