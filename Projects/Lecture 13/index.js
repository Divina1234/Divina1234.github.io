function clock() {
  let date = new Date().toLocaleTimeString();
  //console.log(date);
  document.getElementById("clock").innerText = date;
  document.getElementById("clock");
  setTimeout(clock, 1000);
}
clock();
