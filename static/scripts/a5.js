var intervalID = window.setInterval(myCreateFunction, 1000);
var output = document.getElementById("output")

function getMeta(metaName) {
  const metas = document.getElementsByTagName('meta');

  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') === metaName) {
      return metas[i].getAttribute('output');
    }
  }
}

function myCreateFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  var cell = row.insertCell(0);
  cell.innerHTML = getMeta('output');

}

function myDeleteFunction() {
  document.getElementById("myTable").deleteRow(0);

}