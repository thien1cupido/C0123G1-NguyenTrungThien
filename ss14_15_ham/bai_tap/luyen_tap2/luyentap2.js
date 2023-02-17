//Bình phương một số
function square(number) {
    let result = number * number;
    return result;
}
//Diện tích hình tròn
function circleArea(number) {
    const Pi=3.14;
   let acreage=square(number)*Pi;
   return acreage;
}
//Chu vi hình tròn
function diameterOfCircle(number) {
    const Pi=3.14;
    let perimeter = number*Pi;
    return perimeter;
}