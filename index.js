// code your solution here
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
];

function superbowlWin(record) {
  const win = record.find(game => game.result === "W");
  return win ? win.year : undefined;
}

// Usage example:
const winYear = superbowlWin(record);
console.log(winYear); // Output: 2015

