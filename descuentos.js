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
