//// Promises ////

let certificatePromise = new Promise((resolve, reject) => {
  // some processing happens and canditate gets certificate
  certified = false;
  if (certified) {
    //success
    resolve("Certificate obtained!");
  } else {
    //failure
    reject("Certificate rejected!");
  }
});

certificatePromise
  .then((successResult) => {
    console.log(successResult);
  })
  .catch((failureResult) => {
    console.log(failureResult);
  });
