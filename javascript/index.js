function solution1() {

    var a = document.getElementById("side1").value;
    var b = document.getElementById("side2").value;
    var c = document.getElementById("side3").value;

    var d = a * b * c;
    document.getElementById("ans").innerHTML = "Area of triangle is --->" + d;

}



function solution2(temp) {

    var num;


    if (temp == 'cel') {
        num = document.getElementById("c").value;


        document.getElementById("f").value = (num * 1.8) + 32;
    } else {

        num = document.getElementById("f").value;

        document.getElementById("c").value = (5 * (num - 32)) / 9;
    }
}



function solution3() {



    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var c = document.getElementById("num3").value;


    document.getElementById("ans3").innerHTML = "Largest no is ---> " + (a > b ? (a > c ? a : c) : (b > c ? b : c));

}


function solution4(str) {


    var sr = document.getElementById("str1").value;

    var srr = sr.split(" ");

    var a = [];
    var b = [];
    for (var i = 0; i < srr.length; i++) {
        var temp = srr[i].split("");
        temp[0] = temp[0].toUpperCase()
        var str = temp.join("")
        a.push(str);
    }


    document.getElementById("str2").innerHTML = a.join(" ");


}



function solution5() {
    var num = document.getElementById("no1").value;

    if (num % 3 == 0) {
        if (num % 7 == 0) {
            document.getElementById("res").innerHTML = "no is divisible by 3 and 7 both.";
        } else {
            document.getElementById("res").innerHTML = "no is divisible by 3 only.";
        }
    } else if (num % 7 == 0) {
        document.getElementById("res").innerHTML = "no is divisible by 7 only.";

    } else {
        document.getElementById("res").innerHTML = "no is not divisible by 3 or 7.";
    }
}


function solution6() {

    var d1 = document.getElementById('dna1').value;
    var d2 = document.getElementById('dna2').value;


    var i;
    var count = 0;

    console.log(d1.length);

    for (i = 0; i < d1.length; i++) {

        if (d1[i] != d2[i]) {


            count++;
        }
        console.log(count);
    }
    console.log(dna1[2]);

    document.getElementById("dnaresult").innerHTML = "there are " + count + " characters are different.";
}


function solution7() {

    var p = document.getElementById("pana").value.toLowerCase();
    var i = 0;
    var a = [];
    var temp;

    for (i = 0; i < 26; i++) {
        a[i] = 0;
    }

    for (i = 0; i < p.length; i++) {

        temp = (p.charCodeAt(i)) - 97;

        a[temp] = 1;
    }

    for (i = 0; i < 26; i++) {
        if (a[i] == 0) {
            document.getElementById("panaresult").innerHTML = "String is not  a panagram.";
            break;
        }
    }
    if (i == 26)
        document.getElementById("panaresult").innerHTML = "String is  a panagram.";


}



function solution8() {

    var p = document.getElementById("iso").value;
    var i = 0;
    var a = [];
    var temp;
    var temp1 = 0;

    for (i = 0; i < 26; i++) {
        a[i] = 0;
    }

    for (i = 0; i < p.length; i++) {

        temp = (p.charCodeAt(i)) - 97;

        a[temp] += 1;
    }

    for (i = 0; i < 26; i++) {
        if (a[i] > 1) {
            document.getElementById("isoresult").innerHTML = "Not a isogram";
            temp1 = 1;
            break;
        }

    }

    if (temp1 == 0) {
        document.getElementById("isoresult").innerHTML = "Isogram";
    }

}


function solution9() {

    var n = document.getElementById("acronym").value;
    var text = "";
    var nn = n.split(" ");

    for (var i = 0; i < nn.length; i++) {


        text += nn[i].charAt(0);
    }
    document.getElementById("acronymresult").innerHTML = text.toUpperCase();


}