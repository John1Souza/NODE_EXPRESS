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