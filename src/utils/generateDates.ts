function correcaoDia(dia: number) {
  if (isNaN(dia)) return false;

  return dia < 10 ? '0' + dia : dia;
}

function correcaoMes(mes: number) {
  if (isNaN(mes)) return false;

  return mes < 10 ? '0' + mes : mes;
}

//http://stackoverflow.com/a/16353241/2467235
function leapYear(year: number) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

//https://pt.stackoverflow.com/questions/155782/parcelamento-com-data-pulando-m%C3%AAs-de-fevereiro
export function calcularParcelas(parcelas: number, stringData: string) {
  const newDate = new Date(stringData).toLocaleDateString();
  console.info(newDate);
  let ano = Number(newDate.substring(6, 10));
  let mes = Number(newDate.substring(3, 5));
  let dia = Number(newDate.substring(0, 2));

  if (Number(dia) === 29 && leapYear(ano)) dia = 28;

  let dataInicial = new Date(ano, mes, dia);
  console.info(dataInicial);
  let dataParcela = new Date();
  const dateArray = [];
  let novoMes = 0;
  let novoAno = 0;
  let resultado = '';
  for (let p = 0; p < parcelas; p++) {
    novoMes = (dataInicial.getMonth() + p) % 12;
    novoMes = novoMes == 0 ? 12 : novoMes;
    novoAno = dataInicial.getFullYear() + (dataInicial.getMonth() + p - novoMes) / 12;

    dataParcela.setDate(dia);
    dataParcela.setMonth(novoMes);
    dataParcela.setFullYear(novoAno);

    resultado = `${dataParcela.getFullYear()}-${correcaoMes(
      dataParcela.getMonth() + 1,
    )}-${correcaoDia(dataParcela.getDate())}`;
    dateArray.push(resultado);
  }
  console.info(dateArray);
  return dateArray;
}
