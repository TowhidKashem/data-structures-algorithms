// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let row = 0; row < n; row++) {
    let step = "";
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }

  //   for (let i = 0; i < n; i++) {
  //     console.log(
  //       new Array(n)
  //         .fill(null)
  //         .map((val, index) => {
  //           if (index <= i) return "#";
  //           return " ";
  //         })
  //         .join("")
  //     );
  //   }
}

module.exports = steps;
