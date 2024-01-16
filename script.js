let count = 0;
const counterElement = document.getElementById("counter");
//text content gets the content inside a tag as you can see we got the
//element id of counter and got it's inside content and assigned it to
//count which holds the value 0 now the values are connected
function increment() {
  count++;
  counterElement.textContent = count;
}

function reset() {
  count = 0;
  counterElement.textContent = count;
}
