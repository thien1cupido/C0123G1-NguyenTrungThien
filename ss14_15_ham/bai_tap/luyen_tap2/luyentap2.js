//Bình phương một số
function getSquare(number) {
    return number * number;
}

//Diện tích hình tròn
function getCircleArea(number) {
    const Pi = 3.14;
    return getSquare(number) * Pi;
}

//Chu vi hình tròn
function getDiameterOfCircle(number) {
    const Pi = 3.14;
    return number * Pi;
}

//Tính giai thừa
function getFactorial(number) {
    let factorial = 1
    for (let i = 1; i <= number; i++) {
        factorial = i * factorial;
    }
    return factorial;
}

//Kiểm tra ký tự số
function checkIsNumber(number) {
    let check;
    check = !isNaN(number);
    return check;
}

//Trả về số nhỏ nhất
function checkNumberSmallest(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

// Kiểm tra số nguyên dương
function checkForPositiveIntegers(number) {
    return number > 0;
}

// Đảo mảng
function reverseArray(str) {
    let string = str.split("");
    let arrStr = string.reverse();
    return arrStr.join("");
}

//kiểm tra xem ký tự bất kỳ đó có nằm trong mảng
function checkCharacterInArray(str1, str2) {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2) {
            count += 1;
        }
    }
    if (count !== 0) {
       return count;
    } else {
        return -1;
    }
}