var totalPrice = 0.00;

document.addEventListener("DOMContentLoaded", function (event) {
        // disable the lower part of the form until we have user input for all values
    document.getElementById("totalPrice").disabled = true;
   
})


function formSubmitEvent() {
    var smallPrice = document.getElementById("small").value;
    var mediumPrice = document.getElementById("medium").value;
    var largePrice = document.getElementById("large").value;
    var toppingPrice = document.getElementById("toppings").value;
    var orderTotal = document.getElementById("totalPrice").value;

    // we could do much better validation, but that's not the point of this example!
    if (name.length > 2 && address.length > 2 && city.length > 2 && state.length > 1 && zip.length == 5) {
        document.getElementById("totalPrice").disabled = false;
        document.getElementById("receipt").value = ++orderNumber;
        document.getElementById("visitdate").value = new Date();
    }
    else {
        alert("please fill in all fields");
    }
}

function handleClick(RadioElement) {
    // hanlde select value
    var sel = document.getElementById('ordertype');

    // handle radio button
    var selectedValue = RadioElement.value;
    if (selectedValue == "yes") {
        alert("Thank you for your " + sel.value + " order.");
    }
    else {
        alert("Please call customer service at 800-555-5555 and give them this order number: " + orderNumber);
    }
}