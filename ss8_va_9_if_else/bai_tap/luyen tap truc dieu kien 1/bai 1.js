
//Bài 1
function chiahetchob() {
    let a=+document.getElementById("input1").value;
    let b=+document.getElementById("input2").value;
    let c=a%b;

    if (c === 0){
        document.getElementById("Result1").innerHTML="a chia hết cho b"
    }
    else {
        document.getElementById("Result1").innerHTML="a không chia hết cho b"
    }
}
// Bài 2
function tuoiLop10() {
    let a=+parseInt(document.getElementById("age").value)
    if (a >= 15)
    {
        document.getElementById("Result2").innerHTML= a+ " tuổi, đủ điều kiện để vào lớp 10"
    }else  {
        document.getElementById("Result2").innerHTML= a+ " tuổi, không đủ tuổi để vào lớp 10"
    }

// Bài 4
}
function solonnhat() {
    let a=+parseInt(document.getElementById("snguyen1").value)
    let b=+parseInt(document.getElementById("snguyen2").value)
    let c=+parseInt(document.getElementById("snguyen3").value)
    if (a>b && a>c){
        document.getElementById("Result3").innerHTML=a + " là số lớn nhất"
    }
        else if (b>a && b>c){
            document.getElementById("Result3").innerHTML=b + " là số lớn nhất"
            }
            else {
            document.getElementById("Result3").innerHTML=c + " là số lớn nhất"
                 }
}

// Bài 5
function checkHL() {
    let a = +document.getElementById("ex1").value;
    let b = +document.getElementById("ex2").value;
    let c = +document.getElementById("ex3").value;
    let kq = ((a  + (b*2) + (c *3) )/6).toFixed(2);
    if (a <= 10 && b <= 10 && c <= 10){
        if (kq >= 8) {
            document.getElementById("Result5").innerHTML = kq + " Điểm, đạt học sinh giỏi"
        }else if (kq >= 6.5){
            document.getElementById("Result5").innerHTML = kq + " Điểm, đạt học sinh khá"
        }
        else if (kq >= 5){
            document.getElementById("Result5").innerHTML = kq + " Điểm, đạt học sinh trung bình"
        }
        else if (kq >=3.5 ) {
            document.getElementById("Result5").innerHTML = kq + " Điểm, đạt học sinh yếu"
        }
        else document.getElementById("Result5").innerHTML = kq + " Điểm, đạt học sinh kém"
    }else document.getElementById("Result5").innerHTML = "Mời nhập lại"
}

// Bài 6
function commissonCal() {
    let a= +parseInt(document.getElementById("money").value);
    if  (a>=30000000){
        a=(a*7)/100;
        document.getElementById("Result6").innerHTML= "Hoa hồng nhận được là 7%, tiền nhận được là " +a + " VNĐ"
    }else if (a>=10000000 ){
            a=(a*5)/100;
            document.getElementById("Result6").innerHTML= "Hoa hồng nhận được là 5%, tiền nhận được là " +a + " VNĐ"
            }
            else if(a>0) {
                a = (a * 7) / 100;
                document.getElementById("Result6").innerHTML = "Hoa hồng nhận được là 3%, tiền nhận được là " + a + " VNĐ"
                }
                else document.getElementById("Result6").innerHTML="Xin mời nhập lại"
}