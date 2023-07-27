export default function countAllPaarl(regNo) {
  var regNo = regNo.split(", ");
  var paarlCount = 0;
  for (var i = 0; i < regNo.length; i++) {
    if (regNo[i].startsWith("CJ")) {
      paarlCount++;
    }
  }
  return paarlCount;
}
