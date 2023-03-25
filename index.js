// const MAX_PRIME = 1000000;

// const isPrime = (n) => {
//   for (let i = 2; i < Math.sqrt(n); i++) {
//     if (n % i === 0){
//         return false;
//     }
//   }
//   return n > 1;
// };

// const random = (max) => Math.floor(Math.random() * max);

// const generatePrimes = (quota) => {
//   const primes = [];
//   while (primes.length < quota) {
//     const candidate = random(MAX_PRIME);

//     if (isPrime(candidate)) {
//         primes.push(candidate);
//     }
//   }
//   return primes;
// };

// const quota = document.querySelector('#quota')
// const output = document.querySelector('#output')

// document.getElementById('generate').addEventListener('click', () => {
//     const primes = generatePrimes(quota.value);
//     output.textContent = `Finished generating ${quota.value} primes!`

// })

// document.getElementById('reload').addEventListener('click', () => {
//     document.location.reload();
// })

// Events

// const log = document.querySelector('.event-log')

// document.getElementById('xhr').addEventListener('click', () => {
//     log.textContent = '';

//     const xhr = new XMLHttpRequest();

//     xhr.addEventListener('loadend', () => {
//         log.textContent = `${log.textContent}Finished with status: ${xhr.status}`
//     })

//     xhr.open('GET', 'https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json');
//     xhr.send()
//     log.textContent = `${log.textContent} Started XHR request\n`

//     document.querySelector("#reload").addEventListener('click', () => {
//         log.textContent = ''
//         document.location.reload()
//     })
// })

// Fetch API

// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')

// console.log(fetchPromise)

// fetchPromise.then((response) =>
//     console.log(`Received response: ${response.status}`)
// )

// console.log("Started request...")

// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')

// console.log(fetchPromise)

// fetchPromise.then((response) => {
//     const jsonPromise = response.json()
//     jsonPromise.then((data) => {
//         console.log(data[0].name);
//     })
// })

// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')

// fetchPromise
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(`HTTP error : ${response.status}`)
//         }
//         return response.json()
//     })
//     .then((data) => {
//     console.log(data[0].name);})
//     .catch((error) => console.log(`Could not get products ${error}`))

// const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
// const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//   .then((responses) => {
//     for (const response of responses) {
//       console.log(`${response.url}: ${response.status}`);
//     }
//   })
//   .catch((error) => {
//     console.error(`Failed to fetch: ${error}`)
//   });

//   const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
// const fetchPromise3 = fetch('bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//   .then((responses) => {
//     for (const response of responses) {
//       console.log(`${response.url}: ${response.status}`);
//     }
//   })
//   .catch((error) => {
//     console.error(`Failed to fetch: ${error}`)
//   });

// const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
// const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

// Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
//   .then((response) => {
//     console.log(`${response.url}: ${response.status}`);
//   })
//   .catch((error) => {
//     console.error(`Failed to fetch: ${error}`)
//   });

// async function fetchProducts() {
//     try {
//         // after this line, our function will wait for the `fetch()` call to be settled
//         // the `fetch()` call will either return a Response or throw an error
//         const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
//         if (response.ok){
//             throw new Error(`HTTP error: ${response.status}`)
//         }
//         // after this line, our function will wait for the `response.json()` call to be settled
//         // the `response.json()` call will either return the parsed JSON object or throw an error
//         const data = await response.json()
//         console.log(data[0].name)
//     }
//     catch(error) {
//         console.error(`Could not get products: ${error}`)
//     }

// }

// fetchProducts()

// function init() {
//     var name = "Mozila"
//     function displayName(){
//         // displayName() is the inner function, that forms the closure
//         console.log(name) // use variable declared in the parent function
//     }
//     displayName()
// }

// init()

// const counter = (
//     function() {
//         let privateCounter = 0
//         function changeBy(val){
//             privateCounter += val
//         }
//         return {
//             increment(){
//                 changeBy(1)
//             },
//             decrement(){
//                 changeBy(-1)
//             },
//             value(){
//                 return privateCounter
//             },
//         };
//     }
// )();

// console.log(counter.value()); // 0.

// counter.increment();
// counter.increment();
// console.log(counter.value()); // 2

// counter.decrement();
// console.log(counter.value()); // 1

// const makeCounter = () => {
//     let privateCounter = 0;
//     function changeBy(val){
//         privateCounter += val
//     }

//     return {
//         increment(){
//             changeBy(1)
//         },
//         decrement(){
//             changeBy(-1)
//         },
//         value(){
//             return privateCounter
//         },
//     };
// };

// const counter1 = makeCounter()
// const counter2 = makeCounter()

// console.log(counter1.value()); // 0.

// counter1.increment()
// counter1.increment()
// console.log(counter1.value()); // 2.

// counter1.decrement()
// console.log(counter1.value()); // 1.
// console.log(counter2.value()); // 0.

// global scope

// const e = 10;
// function sum(a){
//     return function (b){
//         return function (c){
//             // outer functions scope
//             return function (d){
//                 // local scope
//                 return a + b + c + d + e
//             }
//         }
//     }
// }

// console.log(sum(1)(2)(3)(4)); // 20

// global scope

// const f = 10;
// function sum(a) {
//     return function sum2(b){
//         return function sum3(c){
//             // outer functions scope
//             return function sum4(d){
//                 // local scope
//                 return a + b + c + d + e
//             }
//         }
//     }
// }

// const sum2 = sum(1)
// const sum3 = sum2(2)
// const sum4 = sum3(3)
// const result = sum4(4)
// console.log(result); // 20

// function outer() {
//     const x = 5;
//     if (Math.random() > 0.5){
//         const y = 6;
//         return () => console.log(x, y);
//     }
// }

// outer()();

// import { getX , setX } from "./myModule.js"

// console.log(getX())
// setX(6)
// console.log(getX())

function showHelp(help) {
  document.getElementById("help").textContent = help;
}
const makeHelpCallback = (help) => {
  return function () {
    showHelp(help);
  };
};
function setupHelp() {
  var helpText = [
    { id: "email", help: "Your email address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    // Culprit is the use of `var` on this line
    var item = helpText[i];
    document.getElementById(item.id).onfocus =
      makeHelpCallback(item.help);
  }
}

setupHelp();
