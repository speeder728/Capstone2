var intervalID = window.setInterval(myCreateFunction, 1000);
var output = $('#output').data();

function myCreateFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = output;

}

function myDeleteFunction() {
  document.getElementById("myTable").deleteRow(0);

}
