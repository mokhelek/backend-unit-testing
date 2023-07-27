<<<<<<< HEAD:js/findItemsOver20.js
export default function findItemsOver20(items) {
  let itemsOver20 = [];
  for (let i in items) {
    let item = items[i];
=======
export default  items => {
  var itemsOver20 = [];
  for (var i in items) {
    var item = items[i];
>>>>>>> 798906afc79035c1153b03b2aca77224228b575d:findItemsOver20.js
    if (item.qty > 20) {
      itemsOver20.push(item);
    }
  }
  return itemsOver20;
}
