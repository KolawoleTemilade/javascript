const character = "!";
const count = 10;
const rows = [];
// heres to check for when its inverted
const inverted = false; // iverted could be true or false depending  on how i want it to be.


function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber)

}

// room for inverted pyramid

for (let i = 1; i <= count; i++) {
  if (inverted ){ //if inverted id true, of which it was declared false,
    rows.unshift(padRow(i, count)) // it should run this
  }  else{             // else, if inverted is false, and of which it is false
    rows.push(padRow(i, count)); // it should run this.
  }
}