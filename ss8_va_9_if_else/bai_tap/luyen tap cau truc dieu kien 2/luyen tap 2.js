//Bài 3
function svuong() {
    let a= +document.getElementById("input-a").value;
    a=Math.pow(a,2);
    document.getElementById("Result").innerHTML = "Diện tích hình vuông là: " + a;
}

//Bài 3
function schunhat() {
            let a= +document.getElementById("ip-a").value;
            let b= +document.getElementById("ip-b").value;
            let s;
            s = a*b;
        document.getElementById("Result4").innerHTML = "Diện tích hình chữ nhật là: " + s;
}
//Bài 5
function stamgiac() {
    let a= +document.getElementById("inp-a").value;
    let b= +document.getElementById("inp-b").value;
    let s=(a*b)/2;
    document.getElementById("Result5").innerHTML= "Diện tích hình tam giác vuông là: " + s;
}

//Bài 6
function ptbac1() {
    let a= +document.getElementById("inpt-a").value;
    let b= +document.getElementById("inpt-b").value;
    let x=(-b / a);
    if (a===0 && b===0) {
        document.getElementById("Result6").innerHTML = "Phương trình có vô số nghiệm"
    }else  if (a !== 0 && b===0) {
        document.getElementById("Result6").innerHTML = "Phương trình có nghiệm x=0"
        }
        else if (a===0 && b!==0) {
        document.getElementById("Result6").innerHTML = "Phương trình vô nghiệm"
        }
        else
        document.getElementById("Result6").innerHTML = "Phương trình có nghiệm là x= -b/a = " + x
}

//Bài 7
function ptbac2() {
    let a= +document.getElementById("input-a").value;
    let b= +document.getElementById("input-b").value;
    let c= +document.getElementById("input-c").value;
    let delta=(Math.pow(b,2))-4*a*c;
    let nkep=-b/(2*a);
    let x1=(-b+Math.sqrt(delta))/2*a;
    let x2=(-b-Math.sqrt(delta))/2*a;
    if (a===0){
        document.getElementById("Result7").innerHTML= "Xin mời nhập lại, a phải khác 0"
    }
    else if (delta===0){
        document.getElementById("Result7").innerHTML= "PT có nghiệm kép x1=x2= "+nkep
        }
        else if (delta < 0) {
        document.getElementById("Result7").innerHTML = "PT vô nghiệm"
        }else {
        document.getElementById("Result7").innerHTML = "PT có 2 nghiệm phân biệt x1= " + x1 + " và x2= " + x2;
    }
}
//Bài 8
function sstuoi() {
    let tuoi = document.getElementById("nhapt-a").value;
    if (tuoi % 1 === 0) {
        if (tuoi > 0 && tuoi < 120)
            document.getElementById("Result8").innerHTML = "Tuổi của bạn là " + tuoi + " tuổi"
        else
            document.getElementById("Result8").innerHTML = "Nhập sai độ tuổi, xin mời nhập lại"
    }else
        document.getElementById("Result8").innerHTML = "Nhập sai, xin mời nhập lại"
}
//Bài 9
function ckTamgiac() {
    let a=+document.getElementById("nhap-a").value;
    let b=+document.getElementById("nhap-b").value;
    let c=+document.getElementById("nhap-c").value;
    console.log(a);
    let ab=a+b;
    let bc=b+c;
    let ac=a+c;
    if (a>0 && b>0 && c>0){
        if (ab>c && bc>a && (ac>b))
        document.getElementById("Result9").innerHTML="a,b,c là các cạnh của môt tam giác"
        }
        else
        document.getElementById("Result9").innerHTML="a,b,c là không phải các cạnh của môt tam giác"
}
//Bài 10
function ELbill() {
    let a=+document.getElementById("input-nb").value;
    let kq;
    if (a<=50) {
        kq = a *1678 ;
        document.getElementById("Result10").innerHTML = "Tiền điện bậc 1 là " + kq;
    }else if (a<=100) {
        kq  = a * 1734;
        document.getElementById("Result10").innerHTML = "Tiền điện bậc 2 là " + kq;
        }else if (a<=200) {
            kq = a * 2014;
            document.getElementById("Result10").innerHTML = "Tiền điện bậc 3 là " + kq;
            }else if (a<=300) {
                kq = a * 2536;
                document.getElementById("Result10").innerHTML = "Tiền điện bậc 4 là " + kq;
                    }else if (a<=400) {
                        kq = a * 2834;
                        document.getElementById("Result10").innerHTML = "Tiền điện bậc 5 là " + kq;
                            }else{
                                kq = a*2927;
                                document.getElementById("Result10").innerHTML = "Tiền điện bậc 6 là " + kq;
                                  }
}

//Bài 11
function tinhThue() {
    let a=+document.getElementById("nhapTien").value;
    let kq;
    if (a< 5000000) {
        kq = (a *5)/100 ;``
        document.getElementById("Result11").innerHTML = "Tiền thuế phải nộp là " + kq + " VNĐ";
    }else if (a<=10000000) {
        kq  = ((a * 10)/100)-250000;
        document.getElementById("Result11").innerHTML = "Tiền thuế phải nộp là  " + kq +" VNĐ";
    }else if (a<=18000000) {
        kq = ((a * 15)/100)-750000;
        document.getElementById("Result11").innerHTML = "Tiền thuế phải nộp là " + kq+ " VNĐ";
    }else if (a<=32000000) {
        kq =((a * 20)/100)-1650000;
        document.getElementById("Result11").innerHTML = "Tiền thuế phải nộp là " + kq+ " VNĐ";
    }else if (a<=52000000) {
        kq = ((a * 25)/100)-3250000;
        document.getElementById("Result11").innerHTML = "Tiền thuế phải nộp là " + kq+ " VNĐ";
    }else if (a<=80000000) {
        kq = ((a * 30)/100)-5850000;
        document.getElementById("Result11").innerHTML = "Tiền thuế phải nộp là " + kq+ " VNĐ";
    }else{
        kq = ((a * 35)/100)-9850000;
        document.getElementById("Result11").innerHTML = "Tiền thuế phải nộp là " + kq+ " VNĐ";
    }
 }

 //Bài 12
function interestRateBank() {
    let moneyRate = +document.getElementById("moneyInput").value;
    let months = +document.getElementById("month").value;
    let inInterestRate = +document.getElementById("interestRate").value;
    // let RateEachMonth;
    let moneyLoan= moneyRate*(months/100)/12*inInterestRate;
    if (months>0){
       document.getElementById("Result12").innerHTML="Lãi phải trả là " + moneyLoan;
    }else
        document.getElementById("Result12").innerHTML="Vui lòng nhập lại";

    //     let result1 = a * 0.05 * b;
    // let result2 = result1 + a * 0.1 * (b - 6);
    // let result3 = result2 + a * 0.15 * (b -12);
    // let result4 = result3 + a * 0.2 * (b - 18);
    //
    // if ( b > 0 && b <= 6  )
    //     document.getElementById("Result12").innerHTML = result1;
    // else if ( 6 < b && b <= 12 )
    //     document.getElementById("Result12").innerHTML = result2;
    // else if (12 < b && b <= 18)
    //     document.getElementById("Result").innerHTML = result3;
    // else
    //     document.getElementById("result").innerHTML = result4;

    // let interrestMonth1=moneyRate*inInterestRate;//Tiền lãi
    // let principal=moneyRate/months;//Tiền gốc mỗi tháng
    // let interrestMonth2=(moneyRate-principal)*inInterestRate/months;

}