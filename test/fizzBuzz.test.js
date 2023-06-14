

// describe (
//     'Verificar que cuando 3 y 5 tengan divisores se retornen FizzBuzz',()=> {
//       test ('caso 1 devuelve Fizz cuando sea divisible por 3'),()=>{
//         /**
//          * GUERKING TEST (Given-when-then)
//          * Given un numero
//          * when sea divisible por 3
//          * then devuelve "Fizz"
//          */
//         const fizz_buzz = new fizzBuzz();
//         let numero = 15;
//         let respuesta_esperada = "Fizz";

//         const respuesta = fizz_buzz.retornar_fizz_buzz(numero);
//         expect(respuesta).toBe(respuesta_esperada);
//       }
//     }
//   )


const Fizz_buzz = require("../fizzBuzz.js")

describe("Fizz_buzz", () => {
  test("retorna FizzBuzz si el número es divisible por 3 y 5", () => {
    const fizz_buzz = new Fizz_buzz();
    expect(fizz_buzz.retornar_fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizz_buzz.retornar_fizzBuzz(45)).toBe("FizzBuzz");
  });

  test("retorna Fizz si el número es divisible por 3 pero no por 5", () => {
    const fizz_buzz = new Fizz_buzz();
    expect(fizz_buzz.retornar_fizzBuzz(3)).toBe("Fizz");
    expect(fizz_buzz.retornar_fizzBuzz(21)).toBe("Fizz");
  });

  test("retorna Buzz si el número es divisible por 5 pero no por 3", () => {
    const fizz_buzz = new Fizz_buzz();
    expect(fizz_buzz.retornar_fizzBuzz(5)).toBe("Buzz");
    expect(fizz_buzz.retornar_fizzBuzz(25)).toBe("Buzz");
  });

  test("retorna el número como una cadena si no es divisible por 3 ni por 5", () => {
    const fizz_buzz = new Fizz_buzz();
    expect(fizz_buzz.retornar_fizzBuzz(22)).toBe("7");
    expect(fizz_buzz.retornar_fizzBuzz(19)).toBe("13");
  });
});
  
