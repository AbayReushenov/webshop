class product {
  constructor(id, quant) {
    this.id = id;
    this.quant = 0;
  }

  add() {
    this.quant += 1;
  }

  red() {
    this.quant -= 1;
  }

  del() {
    this.quant = 0;
  }


}
const shoppingCart = [];

const addButton = document.querySelectorAll('btnadd');

addButton.addEventListener('click');
quan;
