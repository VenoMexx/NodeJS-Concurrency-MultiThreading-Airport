const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  // Ana iş parçacığı
  const biletSatWorker = new Worker(__filename);
  const ucakKalkarWorker = new Worker(__filename);
  const bagajTeslimWorker = new Worker(__filename);

  biletSatWorker.postMessage('biletSat');
  ucakKalkarWorker.postMessage('ucakKalkar');
  bagajTeslimWorker.postMessage('bagajTeslim');

  biletSatWorker.on('message', (message) => {
    console.log(message);
  });

  ucakKalkarWorker.on('message', (message) => {
    console.log(message);
  });

  bagajTeslimWorker.on('message', (message) => {
    console.log(message);
  });

} else {
  // Çalışan iş parçacığı (Worker Thread)
  parentPort.once('message', (task) => {
    if (task === 'biletSat') {
      setTimeout(() => {
        parentPort.postMessage('Bilet satıldı.');
      }, 1000);
    } else if (task === 'ucakKalkar') {
      setTimeout(() => {
        parentPort.postMessage('Uçak kalktı.');
      }, 2000);
    } else if (task === 'bagajTeslim') {
      setTimeout(() => {
        parentPort.postMessage('Bagaj teslim edildi.');
      }, 3000);
    }
  });
}
