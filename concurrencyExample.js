const EventEmitter = require('events');

class Airport extends EventEmitter {
  biletSat() {
    setTimeout(() => {
      this.emit('biletSatildi', 'Bilet satıldı.');
    }, 1000);
  }

  ucakKalkar() {
    setTimeout(() => {
      this.emit('ucakKalkti', 'Uçak kalktı.');
    }, 2000);
  }

  bagajTeslim() {
    setTimeout(() => {
      this.emit('bagajTeslimEdildi', 'Bagaj teslim edildi.');
    }, 3000);
  }
}

const sabihaGokcen = new Airport();
sabihaGokcen.on('biletSatildi', (message) => {
  console.log(message);
});
sabihaGokcen.on('ucakKalkti', (message) => {
  console.log(message);
});
sabihaGokcen.on('bagajTeslimEdildi', (message) => {
  console.log(message);
});

sabihaGokcen.biletSat();
sabihaGokcen.ucakKalkar();
sabihaGokcen.bagajTeslim();
