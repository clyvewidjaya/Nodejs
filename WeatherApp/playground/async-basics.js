console.log('Starting App');

//setTimeout takes 2 parameter, first is function,the callback function, the function that will return
//after the certain amount of wait time. second parameter will be the time to wait in milisecond.
setTimeout(() => {
  console.log('Inside of callback');
}, 2000);

setTimeout(() => {
  console.log('Inside of callback 2');
}, 0);

console.log('Finishing Up');
