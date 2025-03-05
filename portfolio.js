//Find the button using the getElement method
var contactButton = document.getElementById("button1");

contactButton.addEventListener("click", function () {
    //Adds an event listener that awaits the button click. Returns an alert notification and clears the fields.
    alert("Thank you for reaching out. I will reach back out to you in a timely manner at the given email.");
    document.getElementById("name1").value = "";
    document.getElementById("email1").value = "";
    document.getElementById("message1").value = "";
});
