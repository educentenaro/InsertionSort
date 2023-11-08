let numerosOrdenados = [];

function ordenarNumerosInsertion() {
  const startTime = performance.now();

  const input = document.getElementById('numberInput');
  const ordenadosSpan = document.getElementById('ordenadosSpan');

  const inputValues = input.value.trim().split(' ');

  numerosInseridos = inputValues.map(value => parseFloat(value)).filter(value => !isNaN(value));

  numerosOrdenados = insertionSort([...numerosInseridos]);
  ordenadosSpan.textContent = numerosOrdenados.join(', ');

  const endTime = performance.now();
  const executionTime = endTime - startTime;

  console.log(`Executado em ${executionTime} milissegundos.`);
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