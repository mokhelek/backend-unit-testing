export default function findItemsOver(items, threshold) {
  var itemsOver = [];
  for (var i in items) {
    var item = items[i];
    if (item.qty > threshold) {
      itemsOver.push(item);
    }
  }
  return itemsOver;
}
