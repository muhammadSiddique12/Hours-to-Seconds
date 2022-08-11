function toseconds() {
  var seconds, hours;
  hours = document.getElementById("hours").value;
  console.log(seconds);
  seconds = 3600 * hours;
  document.getElementById("toseconds").innerHTML =
    " Seconds in hours : " + seconds;
}
