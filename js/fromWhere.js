export default function fromWhere(regNo) {
  switch (regNo.slice(0,2)) {
    case "CY":
      return "Bellville";
      break;
    case "CA":
      return "Cape Town";
      break;
    case "CJ":
      return "Paarl";
      break;
    default:
      return "Some other place!";
  }
}


