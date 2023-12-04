function tampil() {
  let x = document.getElementById("nilai1").value;
  let y = document.getElementById("nilai2").value;
  let hasil = " ";

  for (let d = x; d <= y; d++) {
    hasil += d + "<br>";
  }
  document.getElementById("cek").innerHTML = hasil;
}

//looping turun
function tampil1() {
  let a = document.getElementById("nilaia").value;
  let b = document.getElementById("nilaib").value;
  let hasil1 = " ";

  for (let c = a; c >= b; c--) {
    hasil1 += c + "<br>";
  }
  document.getElementById("cek1").innerHTML = hasil1;
}