var intervalID = window.setInterval(myCreateFunction, 1000);


function myCreateFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  var cell = row.insertCell(0);
  cell.innerHTML = 'hello there';

}

function myDeleteFunction() {
  document.getElementById("myTable").deleteRow(0);

}