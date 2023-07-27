export default function countAllFromTown(regNo, startString) {
  var allTowns = regNo.split(",");
  var townCount = 0;
  for (var i = 0; i < allTowns.length; i++) {
    if (allTowns[i].includes(startString)) {
      townCount++;
    }
  }
  return townCount;
}
