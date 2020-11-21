onmessage = async (_event) => {
  console.log('webworker.js:3', {_event});
  if (_event && _event.data && _event.data.msg === 'testWebWorker') {
    const newCounter = hangoverFunction(_event.data.countTest);
    postMessage(newCounter);
  }
};

function hangoverFunction(countTest) {
  const start = Date.now();
  while (Date.now() < start + 5000) {
  }
  return countTest + 1;
};
