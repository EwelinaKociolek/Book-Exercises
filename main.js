// Pętlowy trójkąt - pętla wywołująca siedem razy funkcję console.log

for ( let number = "#"; number <= "#######"; number = number + "#" ) {
    console.log( number );
}


// FizzBuzz - program drukujący za pomocą funkcji console.log liczby od 1 - 100. Zamiast liczb podzielnych przez 3 drukuje słowo Fizz, zamiast liczb podzielnych przez 5 drukuje słowo Buzz. Jeśli liczba podzielna przez 3 i 5 drukuje FizzBuzz.

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


// Szachownica - tworzy łańcuch reprezentujący siatkę elementów o wymiarach 8x8

for (let number = 1; number <= 8; number++) {
    let output = "";
    if (number % 2 == 1) output += "# # # # ";
    if (number % 2 == 0) output += " # # # #";
    console.log(output)
}
