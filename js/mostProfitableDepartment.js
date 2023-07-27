export default function mostProfitableDepartment(salesData) {
  let totalSales = {};
  for (var i in salesData) {
    var depSales = salesData[i];
    if (totalSales[depSales.department] == undefined) {
      totalSales[depSales.department] = 0;
    }
    totalSales[depSales.department] += depSales.sales;
  }
  let mostSales = 0;
  let mostProfitDepartment = "";
  for (var x in totalSales) {
    if (totalSales[x] > mostSales) {
      mostSales = totalSales[x];
      mostProfitDepartment = x;
    }
  }

  return mostProfitDepartment;
}
