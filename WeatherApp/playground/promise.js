var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    },1500);
  });
};

//chaining. everytime you add return on every resolve, you need to chain them with more
//.then()
asyncAdd(2,5).then((res) => {
  console.log('Results: ', res);
  return asyncAdd(res, 33);
}).then((res) => {
  console.log(res);
}).catch((errorMessage) => {
  console.log(errorMessage);
});

/*
var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('Hey it worked');
    reject('Unable to fulfill promise');
  }, 2500);

}); //promise function takes 1 argument
//resolve is when the promise or query executed and successed
//reject is when promise or query executed but not succeed

//then is a method in promise on to do something after the resolve n rject. param 1
//is for resolve, param 2 is for reject
somePromise.then((message) => {
  console.log('Success: ', message);
}, (errorMessage) => {
  console.log('Error: ', errorMessage);
});

//promise will always executed once.
*/
