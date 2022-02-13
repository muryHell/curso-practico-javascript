//const precioOriginal = 120;
//const descuento = 18;

/*console.log({
  precioOriginal,
  descuento,
  procentajeDescuento,
  precioDescuento
});*/

function calculaDescuento(precio,descuento) {
  const procentajeDescuento = 100 - descuento;
  const precioDescuento = (precio * procentajeDescuento)/100;

  return precioDescuento;
}

function priceDiscount(){
  const inputPrecio = document.getElementById('inputPrecio');
  const priceValue = inputPrecio.value;

  const inputDescuento = document.getElementById('inputDescuento');
  const descuentoValue = inputDescuento.value;

  const pricioDescuento = calculaDescuento(priceValue,descuentoValue);

  const resultP = document.getElementById('resultP');

  resultP.innerText = "El precio con descuento es $" + pricioDescuento;
}
