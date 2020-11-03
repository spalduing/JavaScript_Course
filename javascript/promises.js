//// Promises ////

let certificatePromise = new Promise((resolve, reject) => {
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

let jobPromise = new Promise((resolve, reject) => {
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

certificatePromise
  .then((successResult) => {
    console.log(successResult);
    return jobPromise;
  })
  .catch((failureResult) => {
    console.log(failureResult);
  })
  .then((successResult) => {
    console.log(successResult);
  })
  .catch((failureResult) => {
    console.log(failureResult);
  });

console.log("Rest of the code");
