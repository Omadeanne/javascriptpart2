// promise
function makeRequest(location){
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        if (location === 'Google'){
            resolve('Google says hi')
        } else {
            reject('We can only talk to Google')
        }

    })
}

function processRequest(response){
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Infromation + ${response}`)
    })
}


// async and await
async function correctInput(){
    try{
        const response = await makeRequest('Google')
        console.log('Response Recieved')
        const processResponse = await processRequest(response)
        console.log(processResponse)
    } catch (err){
        console.log(err)
    }
}
correctInput()



makeRequest('Google').then(response => {
    console.log('Response Recieved')
    return processRequest(response)
}).then(processResponse => {
    console.log(processResponse)
}).catch(err =>{
    console.log(err)
})



// example 2

// making a coffee function (async function)
async function makeACoffee (){
    console.log('we are making a coffee')

    await new Promise((resolve) => {setTimeout(resolve,2000)
        console.log('your cofee is ready')
        
    })
}
 //order coffee(calling the async function)
 console.log('ordering the coffee')
 makeACoffee()
 .then(()=> {
console.log('Enjoy your coffee')
 })
 .catch((error) =>{
    console.error(`Error: ${error}`)
 })