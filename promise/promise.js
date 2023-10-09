// let p = new Promise((resolve , reject) => {
//     let a = 1 + 1
//     if (a == 2) {
//         resolve('Success')
//     }
//     else{
//         reject('Failed')
//     }
// })

// p.then((message) =>{
//     console.log('This is in the then ' + message)
// }) .catch((message) => {
//     console.log('This is in the catch ' + message)
// })




//example 2

//ordering for food (request)
//waiting for the food (async)
//get the food (response)

const cookedDish = new Promise((resolve, reject) => {
    setTimeout(() => {
        const dish = 'spaghetti';
        const isAvailable = Math.random() < 0.7
        if (isAvailable){
            resolve(dish)
        } else{
            reject('sorry not available')
        }
    },3000)
})

//handling the promise
cookedDish.then((dish) =>{
    console.log(`you have recieved ${dish} `)
}) .catch((error)=>{
    console.error(`error: ${error}`)
})