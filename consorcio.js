var consorcio = CalcularConsorcio(250000, 16, 0.5, 0.065, 150);
var saldoDevedor = consorcio[0];
var parcelaSemSeguro = consorcio[1];
var parcelaComSeguro = consorcio[2];

console.log(saldoDevedor);
console.log(parcelaSemSeguro);
console.log(parcelaComSeguro);

function CalcularConsorcio(credito, taxaAdm, fundoReserva, seguro, prazoRestante){
  var saldoDevedor = credito * (1 + (taxaAdm/100) + (fundoReserva/100));
  var parcelaSemSeguro = saldoDevedor / prazoRestante;
  var parcelaComSeguro = parcelaSemSeguro + (saldoDevedor * (seguro/100));
  return [saldoDevedor, parcelaSemSeguro, parcelaComSeguro];
}
