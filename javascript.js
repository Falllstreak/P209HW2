document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("totalPrice");
  })
  
  function formSubmitEvent() {
    document.getElementById("totalPrice").innerHTML = "";
    var pie = document.getElementsByTagName('input');
    var tops = document.getElementById('toppings');
    var topsval = parseFloat(tops.value);
    var total = 0.0
  
    for (i = 0; i < pie.length; i++) {
  
      if (pie[i].checked) {
        total = parseFloat(pie[i].value) + topsval;
      }
    }
    document.getElementById("totalPrice").innerHTML += "$" + total.toFixed(2) + "<br>";
  }