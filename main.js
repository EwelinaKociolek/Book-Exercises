// Pętlowy trójkąt

for ( let number = "#"; number <= "#######"; number = number + "#" ) {
    console.log( number );
}


// FizzBuzz

for ( let number = 1; number <= 100; number++) {
    let output = "";
    if (number % 3 == 0) output += "Fizz";
    if (number % 5 == 0) output += "Buzz";
    console.log(output || number);
}

//     if (number % 3 === 0)
//     console.log(number + "Fizz")
//     else if (number % 5 === 0)
//     console.log(number + "Buzz")
//     else if (number % 3 === 0 && number % 5 === 0);
//     console.log(number + "Fizz", "Buzz");
//     //else
//     console.log(number);
// }


// Szachownica

// for (let number = 1; number <= 8; number++) {
//     let output = "";
//     if (number % 2 == 1) output += "# # # # ";
//     if (number % 2 == 0) output += " # # # #";
//     console.log(output)
// }

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);