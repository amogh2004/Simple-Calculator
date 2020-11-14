let removeValues = () => {
  document.getElementById("firstnumber").value = "";
  document.getElementById("secondnumber").value = "";
  document.getElementById("result").value = "";
  document.getElementById("operator").value = "";
}

let addition = () => {
  let firstnumber = Number(document.getElementById("firstnumber").value);
  let secondnumber = Number(document.getElementById("secondnumber").value);
  document.getElementById("operator").value = "+";
  document.getElementById("result").value = firstnumber + secondnumber ;
}

let subtraction = () => {
  let firstnumber = Number(document.getElementById("firstnumber").value);
  let secondnumber = Number(document.getElementById("secondnumber").value);
  document.getElementById("operator").value = "-";
  document.getElementById("result").value = firstnumber - secondnumber ;
}

let multiplication = () => {
  let firstnumber = Number(document.getElementById("firstnumber").value);
  let secondnumber = Number(document.getElementById("secondnumber").value);
  document.getElementById("operator").value = "*";
  document.getElementById("result").value = firstnumber * secondnumber ;
}

let division = () => {
  let firstnumber = Number(document.getElementById("firstnumber").value);
  let secondnumber = Number(document.getElementById("secondnumber").value);
  document.getElementById("operator").value = "/";
  if(secondnumber == 0) {
    document.getElementById("result").value = "Division by zero not possible!" ;
  }
  else {
    document.getElementById("result").value = firstnumber / secondnumber ;
  }
}

let percentage = () => {
  let firstnumber = Number(document.getElementById("firstnumber").value);
  let secondnumber = Number(document.getElementById("secondnumber").value);
  document.getElementById("operator").value = "%";
  if(secondnumber == 0) {
    document.getElementById("result").value = "Invalid!" ;
  }
  else {
    document.getElementById("result").value = (firstnumber / secondnumber) * 100 ;
  }
}

let factorial = () => {
  let n = Number(document.getElementById("firstnumber").value);
  document.getElementById("secondnumber").value = "";
  document.getElementById("operator").value = "x!";
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }
  else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
  }
  document.getElementById("result").value = answer ;
}

let topower = () => {
  let firstnumber = Number(document.getElementById("firstnumber").value);
  let secondnumber = Number(document.getElementById("secondnumber").value);
  document.getElementById("operator").value = "^";
  document.getElementById("result").value = Math.pow(firstnumber, secondnumber) ;
}

let squareroot = () => {
  let firstnumber = Number(document.getElementById("firstnumber").value);
  document.getElementById("secondnumber").value = "";
  document.getElementById("operator").value = "√";
  document.getElementById("result").value = Math.sqrt(firstnumber);
}

let inverseof = () => {
  let firstnumber = Number(document.getElementById("firstnumber").value);
  document.getElementById("secondnumber").value = "";
  document.getElementById("operator").value = "^-1";
  document.getElementById("result").value = 1/firstnumber;
}

let sinx = () => {
  document.getElementById("operator").value = "";
  document.getElementById("secondnumber").value = "";
  let firstnumber = Number(document.getElementById("firstnumber").value);
  document.getElementById("result").value = Math.sin(firstnumber);
}

let cosx = () => {
  document.getElementById("operator").value = "";
  document.getElementById("secondnumber").value = "";
  let firstnumber = Number(document.getElementById("firstnumber").value);
  document.getElementById("result").value = Math.cos(firstnumber);
}

let tanx = () => {
  document.getElementById("operator").value = "";
  document.getElementById("secondnumber").value = "";
  let firstnumber = Number(document.getElementById("firstnumber").value);
  document.getElementById("result").value = Math.tan(firstnumber);
}

let logx = () => {
  document.getElementById("operator").value = "";
  document.getElementById("secondnumber").value = "";
  let firstnumber = Number(document.getElementById("firstnumber").value);
  document.getElementById("result").value = Math.log(firstnumber);
}

let sinhx = () => {
  document.getElementById("operator").value = "";
  document.getElementById("secondnumber").value = "";
  let firstnumber = Number(document.getElementById("firstnumber").value);
  document.getElementById("result").value = Math.sinh(firstnumber);
}

let coshx = () => {
  document.getElementById("operator").value = "";
  document.getElementById("secondnumber").value = "";
  let firstnumber = Number(document.getElementById("firstnumber").value);
  document.getElementById("result").value = Math.cosh(firstnumber);
}

let tanhx = () => {
  document.getElementById("operator").value = "";
  document.getElementById("secondnumber").value = "";
  let firstnumber = Number(document.getElementById("firstnumber").value);
  document.getElementById("result").value = Math.tanh(firstnumber);
}
