// const promise1 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Async task is completed');
//         resolve()
//     }, 1000)
// })

// promise1.then(function () {
//     console.log("Promise consumed");
// })

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('Task 2 completed');
//         resolve()
//     }, 1000)
// })
//     .then(function () {
//         console.log('Async 2 resolved');
//     });

// const promise3 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ username: "Aarushi", email: "aarushibamal@gmail.com" })
//     }, 1000)
// })
// promise3.then(function (user) {
//     console.log(user);
// })

// const promise4 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true;
//         if (!error) {
//             resolve({ username: "Aaru", password: 123 })
//         }
//         else {
//             reject('ERROR : SOMETHING WENT WRONG')
//         }
//     }, 1000)
// })
// promise4.then((user) => {
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log(username);
// }).catch(function (error) {
//     console.log(error);
// }).finally(function () {
//     console.log("Finally is resolved or rejected");
// })

// const promise5 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true;
//         if (!error) {
//             resolve({ username: "Javascript", password: 123 })
//         }
//         else {
//             reject('Error: JS went wrong')
//         }
//     }, 1000)
// })

// async function consumePromise5() {
//     try {
//         const response = await promise5
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromise5()


async function getAll() {
   try {
    const response = await  fetch('https://api.github.com/users/hiteshchaudhary')
  const data = await  response.json()
  console.log(data);
   } catch (error) {
    console.log(error);
   }
}
getAll()