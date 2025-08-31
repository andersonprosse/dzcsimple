async function atualizarQuadrados() {
  const url = "https://opensheet.elk.sh/1aqJzzB8fYB1RZGJjx-lLhWVKt0Y5d2Iwok_fvpRDvDg/1"; 
  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    console.log("Dados recebidos da planilha:", dados);

    // Agora cada linha da planilha representa um quadrado
    const q1 = Number(dados[0]["valor"]);
    const q2 = Number(dados[1]["valor"]);
    const q3 = Number(dados[2]["valor"]);
    const q4 = Number(dados[3]["valor"]);

    console.log("Valores:", q1, q2, q3, q4);

 for (let i = 1; i <= 505; i++) {
  const valor = Number(dados[i - 1]["valor"]); // dados[0] → q1, dados[1] → q2, etc.
  const quadrado = document.getElementById(`q${i}`);
  if (quadrado) {
    quadrado.style.backgroundColor = valor === 0 ? "rgb(18, 171, 18)" : "red";
  }
}

  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
}

atualizarQuadrados();
setInterval(atualizarQuadrados, 5000);
