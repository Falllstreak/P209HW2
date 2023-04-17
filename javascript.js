document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("totalPrice");
  })
  
  function formSubmitEvent() {
    document.getElementById("totalPrice").innerHTML = "";
    let pie = document.getElementsByTagName('input');
    let tops = document.getElementById('toppings');
    let topsval = parseFloat(tops.value);
    let total = 0.0
  
    for (i = 0; i < pie.length; i++) {
  
      if (pie[i].checked) {
        total = parseFloat(pie[i].value) + topsval;
      }
    }
    document.getElementById("totalPrice").innerHTML += "$" + total.toFixed(2) + "<br>";
  }