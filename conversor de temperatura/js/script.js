
function converter() {
    const temperatura = parseFloat(document.getElementById("temperatura").value.replace(",", "."));
    const de = document.getElementById("de").value;
    const para = document.getElementById("para").value;

    if (isNaN(temperatura)) {
        alert("Digite um valor válido.");
        return;
    }

    fetch("http://localhost:8080/api/converter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ valor: temperatura, de: de, para: para }),
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error("Erro na conversão");
        }
        return res.json();
    })
    .then((data) => {
        // Mostrar resultado com uma casa decimal e o símbolo certo
        const simbolos = { C: "°C", F: "°F", K: "K" };
        document.getElementById("resultado").innerText = 
            `${temperatura.toFixed(1)} ${simbolos[de]} = ${data.resultado.toFixed(2)} ${simbolos[para]}`;
    })
    .catch((err) => {
        console.error(err);
        document.getElementById("resultado").innerText = "Erro na conversão.";
    });
}
