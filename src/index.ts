//Primero
/*
const myPromise = Promise.resolve(1)
myPromise.then((value) => {
  console.log(value) // log: 1
})
*/
//Segundo
/*
const myPromise = new Promise((resolve) => {
  resolve(myPromise) ;
})

myPromise.catch((value) => {
 console.log(value + 1)  // log: 2
})
*/

//Tercero
/*
const myPromise = new Promise((resolve) => {
  resolve(1)
})

myPromise
  .then((value) => {
    return value + 2
  })
  .then((value) => {
   console.log(value + ???) // log: 4
  })
*/

//Cuarto
/*
const myPromise = new Promise((resolve, reject) => {
  console.log('Error: Operation Failed')
})

myPromise
  .catch((err) => {
   console.log(err) // log: 'Error: Operation Failed'
  })
*/

//Quinto
const callback1 = (value: any) => console.log('Esto es un texto:', value)
const callback2 = (value: any) => console.log('Esto es un numero:', value)

const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(2);
}, 1000)
});

myPromise.then(callback2); // log: Esto es un número: 2
