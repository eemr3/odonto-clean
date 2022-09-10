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
  let ano = typeof stringData === 'string' ? Number(stringData.substring(0, 4)) : 0;
  let mes = typeof stringData === 'string' ? Number(stringData.substring(5, 7)) : 0;
  let dia = typeof stringData === 'string' ? Number(stringData.substring(8, 10)) : 0;

  if (Number(dia) === 29 && leapYear(ano)) dia = 28;

  let dataInicial = new Date(ano, mes, dia);

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

  return dateArray;
}
