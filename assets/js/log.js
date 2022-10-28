function createCol(){
$(document).ready(function() {
          
    // Select the element inside div
    // element will be added
    $("body")
      
    .prepend('<div class="added">This is added div </div>');
});}
function download(){
    var a = document.body.appendChild(
        document.createElement("div")
    );
    a.download = "index.html";
    a.href = "data:text/html," + document.getElementById("rowAktualne").innerHTML; // Grab the HTML
    a.click(); // Trigger a click on the element
}