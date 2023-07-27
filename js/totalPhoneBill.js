export default function totalPhoneBill(services) {
  services = services.split(", ");
  var totalBill = 0;
  for (var i = 0; i < services.length; i++) {
    if (services[i] == "call") {
      totalBill += 2.75;
    } else {
      totalBill += 0.65;
    }
  }
  return "R" + totalBill.toFixed(2).toString();
}
