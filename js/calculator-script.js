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
