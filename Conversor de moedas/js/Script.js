async function converter() {
  const valor = document.getElementById("valor").value.trim();
  const de = document.getElementById("de").value;
  const para = document.getElementById("para").value;
  const resultadoDiv = document.getElementById("resultado");

  if (isNaN(valor) || valor === "") {
    resultadoDiv.innerHTML = "⚠️ Digite um valor numérico válido!";
    return;
  }

  const url = `http://localhost:8080/api/conversor?de=${de}&para=${para}&valor=${valor}`;
  try {
    const resposta = await fetch(url);
    const valorConvertido = await resposta.json();
    resultadoDiv.innerHTML = `S ${parseFloat(valor).toFixed(2)} ${de} = ${valorConvertido.toFixed(2)} ${para}`;
  } catch (erro) {
    resultadoDiv.innerHTML = " Erro na conversão. Verifique o backend.";
  }
}
