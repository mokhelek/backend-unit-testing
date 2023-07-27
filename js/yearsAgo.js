export default function yearsAgo(year) {
  let currentYr = new Date();
  return currentYr.getFullYear() - year;
}
