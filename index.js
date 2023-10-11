// Code your solution in this file!

function distanceFromHqInBlocks(block) {
  let hQ = 42;
  let pickUp = block;
  return Math.abs(hQ - pickUp);
}
console.log(distanceFromHqInBlocks(45));

function distanceFromHqInFeet(block) {
  let hQ = 42;
  let pickUp = block;
  let distance = 264;
  return Math.abs((hQ - pickUp) * distance);
}

function distanceTravelledInFeet(l1, l2) {
  let distance = 264;
  let total = Math.abs((l1 - l2) * distance);
  return total;
}

function calculatesFarePrice(start, destination) {
  let distance = 264;
  let total = Math.abs((start - destination) * distance);
  if (total < 400) {
    return 0;
  } else if (total > 400 && total < 2000) {
    return (total - 400) * 0.02;
  } else if (total > 2000 && total < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
