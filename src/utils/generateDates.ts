export function calcularParcelas(parcelas: number, stringData: string) {
  console.info('calcularParcelas', stringData);
  const newDate = new Date(stringData).toLocaleDateString();
  console.info('calcularParcelas', newDate);
  const ano = newDate.substring(6, 10);
  const mes = newDate.substring(3, 5);
  const dia = newDate.substring(0, 2);

  const dataInicial = new Date(Number(ano), Number(mes), Number(dia));
  const dataParcela = new Date();
  const dateArray = [];
  let novoMes = 0;
  let novoAno = 0;

  for (var p = 0; p < parcelas; p++) {
    novoMes = (dataInicial.getMonth() + p) % 12;
    novoMes = novoMes == 0 ? 12 : novoMes;
    novoAno = dataInicial.getFullYear() + (dataInicial.getMonth() + p - novoMes) / 12;

    dataParcela.setDate(Number(dia));
    dataParcela.setMonth(novoMes);
    dataParcela.setFullYear(novoAno);
    dateArray.push(
      Date.UTC(
        dataParcela.getUTCFullYear(),
        dataParcela.getUTCMonth(),
        dataParcela.getUTCDate(),
        dataParcela.getUTCHours(),
        dataParcela.getUTCMinutes(),
        dataParcela.getUTCSeconds(),
      ),
    );
  }
  console.info('calcularParcelas', dateArray);
  return dateArray;
}
