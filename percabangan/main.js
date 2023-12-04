function hitung() {
  let angka = document.getElementById("nilai").value;

  if (angka >= 0 && angka <= 70) {
    document.getElementById("hasil").innerHTML = "remidial";
  } else if (angka >= 71 && angka <= 79) {
    document.getElementById("hasil").innerHTML = "NilaiC";
  } else if (angka >= 80 && angka <= 89) {
    document.getElementById("hasil").innerHTML = "NilaiB";
  } else if (angka >= 90 && angka <= 100) {
    document.getElementById("hasil").innerHTML = "NilaiA";
  } else {
    document.writeln("Input salah");
  }
}