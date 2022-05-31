// Exercicio 01
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

/* console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C */
// Ordem de execução é A, B e C

// Exercicio 02
 console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C 
// Ordem de execução A, C e B;

// Exercicio 03
const getPlanet = () => {
    setTimeout(() => {
        const mars = {
            name: "Mars",
            distanceFromSun: {
              value: 227900000,
              measurementUnit: "kilometers",
            },
          };
          console.log("Returned planet: ", mars);
    }, 4000)
  };
  
  getPlanet(); // imprime Marte depois de 4 segundos

  // Exercicio 04
   const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (callback) => {
    setTimeout(() => {
    const result = `Mars temperature is: ${getMarsTemperature()} degree Celsius`;
    console.log(result);
    }, messageDelay())
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// Exercicio 07
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

module.exports = uppercase;


