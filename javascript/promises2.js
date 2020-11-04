// PROMISE ALL //

let certifyPromise = () => {
  return new Promise((resolve, reject) => {
    // some processing happens and canditate gets certificate
    certified = true;

    if (certified) {
      setTimeout(() => {
        //success
        resolve("Certificate obtained!");
      }, 3000);
    } else {
      //failure
      reject("Certificate rejected!");
    }
  });
};

let jobPromise = () => {
  return new Promise((resolve, reject) => {
    // some processing happens and canditate gets certificate
    jobObtained = true;

    if (jobObtained) {
      //success
      resolve("Job obtained!");
    } else {
      //failure
      reject("Job rejected!");
    }
  });
};

console.log("Rest of the code");


//// IT FOCUS ON REJECTS ////
// Promise.all([certifyPromise(), jobPromise()])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((result) => {
//     console.log(result);
//   });

//// IT FOCUS ON RESOLVES
Promise.race([certifyPromise(), jobPromise()])
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
