
function clearScreen() {
    document.getElementById("result").value = "";
}
 
function displays(value) {
    document.getElementById("result").value += " " +value+ " ";
}

function display(value) {
    document.getElementById("result").value += value;
}
 
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function del() {
   var input=document.getElementById("result");
   input.value = input.value.substring(0, input.value.length - 1);
   document.getElementById("result").value= input.value
}

function percent() {
    // var a=document.getElementById("result").value;
    // var b=a/100;
    // document.getElementById("result").value= b;
    document.getElementById("result").value=document.getElementById("result").value/100
}

