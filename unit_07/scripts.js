
document.getElementById("5").addEventListener("click", boom);
document.getElementById("10").addEventListener("click", boom1);
document.getElementById("25").addEventListener("click", boom2);
document.getElementById("largest").addEventListener("click", largest);

function boom() {
    var x = document.getElementById('fname').value
    document.getElementById("change").innerHTML=("£" + x * 0.05)
  }
  function boom1() {
    var x = document.getElementById('fname').value
    document.getElementById("change").innerHTML=("£" + x * 0.1)
  }
  function boom2() {
    var x = document.getElementById('fname').value
    document.getElementById("change").innerHTML=("£" + x * 0.25) 
  }

  function largest() {
    var x = document.getElementById('fname').value
    if (2 + (x * 0.1) < x * 0.25) {
        document.getElementById("change").innerHTML=("£" + x * 0.25)
      }
      else{
        document.getElementById("change").innerHTML=("£" + 2 + (x * 0.1))
      }
  }
  
