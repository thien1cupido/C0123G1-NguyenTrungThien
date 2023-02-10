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
    let tuoi= document.getElementById("nhapt-a").value;
    let tuoi2=parseInt(tuoi);
    if (tuoi === tuoi2 ){
        document.getElementById("Result8").innerHTML= " xin mời nhập lại"
        }
        else if (tuoi>0 && tuoi < 120) {
            document.getElementById("Result8").innerHTML="Tuổi của bạn là " + tuoi + " tuổi"
            }
            else
            document.getElementById("Result8").innerHTML="Nhập sai độ tuổi, xin mời nhập lại"
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