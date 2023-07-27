export default function findItemsOver20(items) {
  let itemsOver20 = [];
  for (let i in items) {
    let item = items[i];
    if (item.qty > 20) {
      itemsOver20.push(item);
    }
  }
  return itemsOver20;
}
