// const UserLeft = false
// const userStillOnline = true

// // callback itemizes an operation the way it should run.
// // it allows function to call another function

// function watchTutorialCallback (callBack, errorCallBack) {
//     if (UserLeft){
//         errorCallBack({
//             name: 'User Left',
//             message: 'Too Bad'
//         })
//     } else if (userStillOnline){
//         errorCallBack({
//             name: 'A Tiidelab Fellow' ,
//             message: 'in InnoDevs Still Online Watching Tutorials' 
//         })
//     } else {
//         callBack ('Your Journey to self Reliance')
//     }
// }
// watchTutorialCallback((message)=> {
//     console.log('Success: ' + message)
// },(error) =>{
//     console.log(error.name + ' ' + error.message)
// })


function task1(callBack) {
    setTimeout((anything) =>{
        console.log('Task one is complete')
        callBack()
    },2000)
} 
function task2(callBack) {
    setTimeout((anything) =>{
        console.log('Task two is complete')
        callBack()
    },5000)
} 
function task3(callBack) {
    setTimeout((anything) =>{
        console.log('Task three is complete')
        callBack()
    },8000)
} 

task3(function(){
    task1(function(){
        task2(function(){
            console.log('All task is completed')
        })
    })
})










// // promise

// function watchTutorialPromise () {
//     return new Promise ((resolve, reject) =>{
//     if (UserLeft){
//         reject({
//             name: 'User Left',
//             message: 'Too Bad'
//         })
//     } else if (userStillOnline){
//         reject({
//             name: 'A Tiidelab Fellow' ,
//             message: 'in InnoDevs Still Online Watching Tutorials' 
//         })
//     } else {
//         resolve('Your Journey to self Reliance')
//     }

//     })
// }

// watchTutorialPromise().then((message)=> {
//     console.log('Success: ' + message)
// }) .catch((error)=> {
//     console.log(error.name + ' ' + error.message)
// })