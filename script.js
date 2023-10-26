let numerosInseridos = [];
let numerosOrdenados = [];

function ordenarNumerosInsertion() {
  const input = document.getElementById('numberInput');
  const numerosSpan = document.getElementById('numerosSpan');
  const ordenadosSpan = document.getElementById('ordenadosSpan');

  const inputValues = input.value.trim().split(' ');

  numerosInseridos = inputValues.map(value => parseFloat(value)).filter(value => !isNaN(value));
  numerosSpan.textContent = numerosInseridos.join(', ');

  numerosOrdenados = insertionSort([...numerosInseridos]);
  ordenadosSpan.textContent = numerosOrdenados.join(', ');
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

function medirTempo() {
  // Início da medição
  const inicio = performance.now();

  // Seu código aqui (simulação de um código que leva algum tempo para executar)
  for (let i = 0; i < 1000000; i++) {
    Math.sqrt(i);
  }

  // Fim da medição
  const fim = performance.now();

  const tempoExecucao = fim - inicio;

  // Exibindo o tempo de execução na tela
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.textContent = `Tempo de execução: ${tempoExecucao.toFixed(3)} ms`;
}